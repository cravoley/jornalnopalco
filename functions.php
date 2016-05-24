<?php

    function getEventsQuery($category=null, $amount=10, $date=null, $place=array()){
        global $wpdb;
        $q = "SELECT
            {$wpdb->posts}.ID as id,
            CAST({$wpdb->postmeta}.meta_value AS DATE) as data
            FROM {$wpdb->postmeta}
                INNER JOIN {$wpdb->posts} ON ({$wpdb->postmeta}.post_id = {$wpdb->posts}.ID)";
            $q.= !empty($category) ? "
                INNER JOIN {$wpdb->term_relationships} ON ({$wpdb->term_relationships}.object_id = {$wpdb->posts}.ID)
                INNER JOIN {$wpdb->terms} ON ({$wpdb->term_relationships}.term_taxonomy_id = {$wpdb->terms}.term_id)":"";

            $q.="
            WHERE 1=1
                AND {$wpdb->posts}.post_type = 'evento'
                AND ({$wpdb->posts}.post_status = 'publish')
                ";

            $filters = array();
            addDateFilter($filters, $date);
            addPlaceFilter($filters, $place);
            if(sizeof($filters)>0){
                $q .= "AND (" . implode(" AND ", $filters) . ")";
            }
            $q .= (!empty($category) ? "AND {$wpdb->terms}.slug = '".$category."'":"")."
            GROUP BY {$wpdb->posts}.ID
            ORDER BY {$wpdb->postmeta}.meta_value
            ASC LIMIT %d";
            // echo $q;
            return $wpdb->prepare($q, $amount);
    }

    function addPlaceFilter(&$filters,Array $place=array()){
        global $wpdb;
        if(sizeof($place) == 0) return "";

        $base = " (
                    SELECT
                        {$wpdb->postmeta}.post_id
                    FROM
                        {$wpdb->postmeta}
                    WHERE
                        {$wpdb->postmeta}.meta_key = 'evento_place'
                        AND {$wpdb->postmeta}.post_id = id";

        $places = array();
        foreach ($place as $key => $value) {
            $places[] = $wpdb->prepare("{$wpdb->postmeta}.meta_value = '%s'", $value);
        }
        $base .= " AND (" . implode(" OR ", $places) . ") ";
        $base .= ")";
        // echo $base;
        array_push($filters, $base);
        return $base;
    }

    function addDateFilter(&$filters, $date){
        global $wpdb;
        $base = " (
                    {$wpdb->postmeta}.meta_key LIKE('date_search_%%%%')
                    AND YEAR(CAST({$wpdb->postmeta}.meta_value AS DATE)) ". (empty($date) ? '>=':'=') . " %s
                    AND MONTH(CAST({$wpdb->postmeta}.meta_value AS DATE)) ". (empty($date) ? '>=':'=') . " %s
                    AND DAY(CAST({$wpdb->postmeta}.meta_value AS DATE)) ". (empty($date) ? '>=':'=') . " %s
                ) ";
        if(empty($date)){
                $q = sprintf($base, 'YEAR(NOW())', 'MONTH(NOW())', 'DAY(NOW())');
            array_push($filters, $q);
        } else {
            if(is_int($date)){
                $q = $wpdb->prepare($base, date("Y",$date), date("m",$date), date("d",$date));
                array_push($filters, $q);
            }
        }
        return $q;
    }


    function printNextEvents($category, $label='', $amount=6){
        global $wpdb;

        //$query = new WP_Query( array( 'category_name' => 'staff' ) );
        // 'post_type' => 'post',
        // array( 'posts_per_page' => 3 )
        // 'meta_query' => array(
        // 'relation' => 'OR',
	// 	array(
	// 		'key'     => 'color',
	// 		'value'   => 'blue',
	// 		'compare' => 'NOT LIKE',
	// 	),
	// 	array(
	// 		'key' => 'price',
	// 		'value'   => array( 20, 100 ),
	// 		'type'    => 'numeric',
	// 		'compare' => 'BETWEEN',
	// 	),
	// ),
        if(empty($label)) $label = $category;

        $filters = array();
        // $filters['category_name'] = $category;
        $filters['posts_per_page'] = $amount;
        $today = date("Ymd");

        $filters['meta_query'] = array('relation' => 'OR');
        // TODO: deixar fixo
        for ($i=0; $i < 10; $i++) {
            array_push($filters['meta_query'],
            array(
                'key' => 'date_search_'.$i,
                'value'   => $today,
                'type'    => 'numeric',
                'compare' => '>='
            ));

        }


        $query = new WP_Query($filters);
        // var_dump($query);
        // var_dump($query->have_posts());



        $q = getEventsQuery($category, $amount);

            $results = $wpdb->get_results($q);
            $baseUrl = get_site_url();

            $out = "";
            $out .= '<section>';
                $out .= '<div class="col-sm-4">';
                    $out .= '<div class="'.$category.' border">';
                        $out .= '<h2 class="title">'.$label.'</h2>';
                        if(sizeof($results) > 0){
                            $out .= '<ul class="list-unstyled">';
                                foreach ($results as $key => $value) {
                                    $post = get_post($value->id);
                                    $postM = get_post_meta($value->id);
                                    $link = get_permalink($post);
                                    if($postM && array_key_exists("evento_place", $postM)){
                                        $place = $postM["evento_place"][0];
                                    } else
                                        $place = "";

                                    // fallback date
                                    $eventDate = strtotime($value->data);
                                    // event last for more than one day
                                    if(array_key_exists("date", $postM) && array_key_exists("date_end", $postM)){
                                        if($postM["date"] != $postM["date_end"]){
                                            $init = strtotime($postM["date"][0]);
                                            $end = strtotime($postM["date_end"][0]);
                                            // the event is not new
                                            if($init < strtotime(date('Y-m-d')))
                                                $eventDate = date("U");
                                            else
                                                $eventDate = $init;
                                        }
                                    }

                                    $out .= '<li>';
                                        $out .= '<time class="data"><a href="'.$link.'">'.date("d/m", $eventDate).' -&nbsp;</a></time>';
                                        $out .= '<h3 class="name">';
                                            $out .= '<a href="'.$link.'">'.$post->post_title;
                                            $out .= '<br />';
                                            $out .= '<small>'. $place.'</small>';
                                            $out .= '</a>';
                                        $out .= '</h3>';
                                    $out .= '</li>';
                                }
                                $out .= '<div class="more pull-right">';
                                    $out .= '<a href="eventos.php">Ver mais</a>';
                                $out .= '<div>';
                            $out .= '</ul>';
                        } else {
                            $out .= '<div class="text-center empty">Em breve mais eventos!</div>';
                        }
                    $out .= '</div>';
                $out .= '</div>';
            $out .= '</section>';
            echo $out;
    }

?>
