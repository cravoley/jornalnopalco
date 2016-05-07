
<?php
include_once("header.php");
?>
<div class="">
    <div class="container content">

        <div class="row events">
            <?php
            // 6 categorias:  Shows - teatro - Dança, literatura - Exposições - Outros
            include("events/shows.php");
            include("events/theater.php");
            include("events/dance.php");
            echo '<div class="clear"></div>';
            include("events/literature.php");
            include("events/exhibition.php");
            include("events/others.php");

            //budo
            //http://webpack.github.io/docs/what-is-webpack.html
            ?>
        </div>

    </div>
</div>

<?php include_once("footer.php"); ?>
