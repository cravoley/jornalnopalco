
<?php
include_once("header.php");
// TODO: FETCH JSON and show content from it
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

<?php include_once("footer.php"); ?>
