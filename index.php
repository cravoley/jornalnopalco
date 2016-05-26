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
<script>
<?php
    $configuration = array();
    $configuration["isSingle"] = is_single() ? true : false;
    $configuration["isPage"] = is_post_type_archive() ? true : get_post_type() == 'page' ? true : false;
    $configuration["page"] = get_post_type() == 'page' ? get_post()->post_name : get_post_type();
    $configuration['templateUrl'] = get_template_directory_uri();
    $configuration['baseUrl'] = get_site_url();
    $configuration["id"] = get_the_id() ? get_the_id() : "";
?>
    var configuration = <?php echo json_encode($configuration); ?>
</script>
<?php include_once("footer.php"); ?>
