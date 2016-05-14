<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Jornal No Palco</title>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/bower_components/jquery-ui/themes/black-tie/theme.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/dist/css/index.css">
</head>
<body class="largeMenu">

<header class="navbar-fixed-top">
    <div class="container-fluid">
        <div class="logo col-md-4 col-xs-12">
            <span class="sr-only"><h1>Jornal no Palco</h1></span>
            <img class="center-block img-responsive" src="<?php echo get_template_directory_uri();?>/img/logo.png" title="Jornal no Palco" />
        </div>
        <nav class="navbar col-md-8 col-xs-12">
            <div class="">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#awdawdawdaw" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse navigation" id="awdawdawdaw">
                    <ul class="nav nav-pills">
                        <li role="presentation" class="active"><a href="#">Home</a></li>
                        <li role="presentation"><a href="<?php echo get_site_url().'/evento';?>">Eventos</a></li>
                        <li role="presentation"><a href="<?php echo get_site_url().'/galeria';?>">Galerias</a></li>
                        <li role="presentation"><a href="#">Notícias</a></li>
                        <li role="presentation"><a href="#">Colunas</a></li>
                        <li role="presentation"><a href="#">E Agora?</a></li>
                        <li role="presentation"><a href="#">Contato</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</header>
