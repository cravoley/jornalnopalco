<?php
include_once("class/EventQueryBuilder.class.php");
include_once("header.php");

?>


    <div class="container content">
        <div class="col-xs-4 col-sm-2">
            <h3 class="text-uppercase text-center">Filtrar</h3>
            <div class="row">
                <div class="col-xs-12">
                    <div class="input-group date datepicker">
                        <input type="text" class="form-control" placeholder="Data"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
                    </div>
                </div>
            </div>
                <div class="row filter">
                    <?php
                    $sql = sprintf("SELECT %s FROM %s ORDER BY %s",
                            "{$wpdb->prefix}event_place_table.place_name, {$wpdb->prefix}event_place_table.place_name_sanitized, {$wpdb->prefix}event_place_table.id",
                            "{$wpdb->prefix}event_place_table",
                            "{$wpdb->prefix}event_place_table.place_name"
                        );
                    $results = $wpdb->get_results($sql);
                    if(sizeof($results) > 0){
                    ?>
                    <div class="col-xs-12">
                        <h4 class="text-uppercase text-center">Local</h4>
                        <ul class="list-unstyled place-filter">
                            <?php
                                $selected = array("99", "arena-de-shows-praia-do-cassino");
                                $opts = "";
                                $selectedStr = "";
                                foreach ($results as $key => $value) {
                                    // var_dump($value->place_name_sanitized);
                                    if(array_search($value->place_name_sanitized, $selected) === false){
                                        $opts .= sprintf('
                                        <li><label data-place="%s"><input type="checkbox"> %s</label></li>',
                                        $value->place_name_sanitized, $value->place_name);
                                    } else {
                                        // selected values
                                        $selectedStr .= sprintf('
                                        <li class="selected">
                                            <label data-place="%s">
                                                <a href="javascript:void(0);">
                                                    <i class="glyphicon glyphicon-remove"><span class="sr-only">remover</span></i> %s
                                                </a>
                                            </label>
                                        </li>',
                                        $value->place_name_sanitized, $value->place_name);
                                    }
                                }
                                echo $selectedStr;
                                echo $opts;
                            ?>
                        </ul>
                    </div>
                    <?php }?>
                    <div class="col-xs-12  text-center">
                        <input class="btn btn-default update" type="button" value="Filtrar" disabled="disabled" />
                    </div>
                </div>
        </div>

        <div class="col-xs-8 col-sm-10">
            <h1 class="center-block text-center">Eventos</h1>
            <?php
            $q =  getEventsQuery(null, 10, null, get_query_var("author"));
            // echo $q;
            $results = $wpdb->get_results($q);
                if(sizeof($results) > 0){
            ?>
            <ul class="list-unstyled eventlist">
                <?php

                    foreach ($results as $key => $value) {
                        $p = get_post($value->id);
                        $thumb = wp_get_attachment_image_src(get_post_thumbnail_id($p), "medium");
                        //$thumb[0]
                        //get_the_permalink()
                        // var_dump($value);
                        $data = strtotime($value->data);
                        $eventHour = get_field("horario",$p);
                        $place = get_field("evento_place",$p);
                    ?>
                <li>
                    <?php
                    echo $value->id;
                    if($thumb){
                        echo '<div class="image pull-left"><a href="' . get_the_permalink($p) . '"><div class="delayed-image-load" data-src="' . $thumb[0] . '"></div></a></div>';
                    }
                    ?>
                    <div class="pull-left">
                        <time><?php echo date("d/m/Y",$data). (!empty($eventHour)?" - ".$eventHour:"");?></time>
                        <h2><?php echo get_the_title($p);?></h2>
                        <p><?php echo $place;?></p>
                    </div>
                </li>
                <?php } ?>
            </ul>


            <?php
                } else {
                    echo '<div class="empty">Em breve novos eventos estarão disponíveis';
                }
            ?>
        </div>
    </div>
<?php


include "footer.php";
