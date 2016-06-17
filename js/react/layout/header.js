/*
<header className="navbar-fixed-top">
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

Cinema ->
Lista de criticas
-> Critica do filme -> Sessões (aba) -> trailer (aba)
 */
import { Component } from 'react';
import properties from "../stores/propertiesStore";
import { Link } from 'react-router';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }



    handleMenu(hide){
        if(hide === true){
            this.setState({collapsed:"",displayMenu:""});
        } else {
            this.setState(
                {
                    collapsed:this.state.collapsed == "collapsed"?"":"collapsed",
                    displayMenu:this.state.displayMenu == "in"?"":"in"
                }
            );
        }
    }

    url(path){
        return properties.relativeUrl+path;
    }

    render(){
        var logoUrl = properties.templateUrl.concat('/img/logo.png');
        let { page, collapsed, displayMenu } = this.state;
        return(
            <header className="navbar-fixed-top">
                <div className="container-fluid">
                    <div className="logo col-md-4 col-xs-12">
                        <span className="sr-only"><h1>Jornal no Palco</h1></span>
                        <img className="center-block img-responsive" src={logoUrl} title="Jornal no Palco" />
                    </div>
                    <nav className="navbar col-md-8 col-xs-12">
                        <div className="">
                            <div className="navbar-header">
                                <button type="button" className={`navbar-toggle ${collapsed}`} aria-expanded="false" onClick={this.handleMenu.bind(this)}>
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className={`collapse navbar-collapse navigation ${displayMenu}`} id="navigationMenu">
                                <ul className="nav nav-pills">
                                    <li role="presentation">
                                        <Link to={this.url("/")} activeClassName="active">Home</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/evento")} activeClassName="active">Eventos</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/galeria")} activeClassName="active">Galerias</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/noticias")} activeClassName="active">Notícias</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/colunistas")} activeClassName="active">Colunistas</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/eagora")} activeClassName="active">E agora?</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/contato")} activeClassName="active">Contato</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/cinema")} activeClassName="active">Cinema</Link>
                                    </li>
                                    <li role="presentation">
                                        <Link to={this.url("/promocoes")} activeClassName="active">Promoções</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
