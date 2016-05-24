<?php
include_once("header.php");
?>
<div class="">
    <div class="container content">

        <div id="content"></div>

        <div class="row events">
            <?php
            // 6 categorias:  Shows - teatro - Dança, literatura - Exposições - Outros
            printNextEvents("show", "Shows");
            printNextEvents("teatro", "Teatros");
            printNextEvents("danca","Danças");
            echo '<div class="clear"></div>';
            printNextEvents("literatura", "Literatura");
            printNextEvents("exposicao", "Exposições");
            printNextEvents("outros", "Outros");

            //budo
            //http://webpack.github.io/docs/what-is-webpack.html
            ?>
        </div>

    </div>
</div>
<script>
    var configuration={
        isSingle:'<?php echo is_single()?"true":"false";?>',
        id:'<?php echo get_the_id();?>'
    };
</script>

<?php include_once("footer.php"); ?>
