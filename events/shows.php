<section>
    <div class="col-sm-4">
        <div class="show border">
            <h2 class="title">Show</h2>
            <ul class="list-unstyled">
                <?php
                    for($i=0;$i<6;$i++){
                        ?>

                        <li>
                           <a href="#">
                               <time class="data">22/03 - </time>
                               <span class="name">Evento <?php echo $i+1;?></span>
                           </a>
                        </li>
                        <?php
                    }
                 ?>
            </ul>
            <div class="more pull-right">
                <a href="eventos.php">Ver mais</a>
            <div>
        </div>
    </div>
</section>
