<?php
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
            <div class="row">
                <div class="col-xs-12">
                    <h4 class="text-uppercase text-center">Local</h4>
                    <ul class="list-unstyled place-filter">
                        <li class="">
                            <label><input type="checkbox" value="99"> 99</label>
                        </li>
                        <li class="">
                            <label><input type="checkbox" value="All Need Master Hall">All Need Master Hall</label>
                        </li>
                        <?php
                        for ($i=0; $i < 20; $i++) {
                        ?>
                            <li class="">
                                <label><input type="checkbox" value="Anexo">Anexo <?php echo $i +1;?></label>
                            </li>
                        <?php
                        }
                        ?>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12  text-center">
                    <input class="btn btn-default" type="submit" value="Filtrar" />
                </div>
            </div>
        </div>

        <div class="col-xs-8 col-sm-10">
            <h1 class="center-block text-center">Eventos</h1>
            <ul class="list-unstyled eventlist">
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 21h35min.</time>
                        <h2>Grupo TIA</h2>
                        <p>Brechó pub</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
                <li>
                    <div class="image pull-left">
                            <img src="http://lorempixel.com/100/100" class="img-responsive" />
                    </div>
                    <div class="pull-left">
                        <time>12/12/2016 - 11h35min.</time>
                        <h2>Grupo TATA</h2>
                        <p>Anexo B</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
<?php


include "footer.php";
