<?php
include_once("header.php");
?>
<div id="content"></div>

<div class="">
    <div class="container content">



        <div class="row events">
            <?php
            // 6 categorias:  Shows - teatro - Dança, literatura - Exposições - Outros
            // printNextEvents("show", "Shows");
            // printNextEvents("teatro", "Teatros");
            // printNextEvents("danca","Danças");
            // echo '<div class="clear"></div>';
            // printNextEvents("literatura", "Literatura");
            // printNextEvents("exposicao", "Exposições");
            // printNextEvents("outros", "Outros");

            //budo
            //http://webpack.github.io/docs/what-is-webpack.html
            ?>
        </div>

    </div>
</div>

<?php
    $configuration = array();
    $configuration["isSingle"] = is_single() ? true : false;
    $configuration["isPage"] = is_post_type_archive() ? true : get_post_type() == 'page' ? true : false;
    $configuration["page"] = (get_post_type() == 'page' ? get_post()->post_name : $post_type);
    $configuration['templateUrl'] = get_template_directory_uri();
    $configuration['baseUrl'] = get_site_url();
    $configuration["id"] = get_the_id() ? get_the_id() : "";
    if($configuration["page"] == "coluna"){
        $configuration["opts"] = array("colunista"=>get_author_nicename());
    }
?>

<script>
    var html5lightbox_options = {
        "freelink": "",
        "googleanalyticsaccount": "<?php echo GA_KEY;?>",
        "barheight": 0
    };
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', '<?php echo GA_KEY;?>', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');
    var configuration = <?php echo json_encode($configuration); ?>
</script>
<?php include_once("footer.php"); ?>
