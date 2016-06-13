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
import React from 'react';
import * as Navigate from '../actions/navigationActions';
import NavigationStore from "../stores/navigationStore";
import properties from "../stores/propertiesStore";
import { Link } from 'react-router';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {page:NavigationStore.getPage() || "", collapsed:"collapsed", displayMenu:""};
        this.changePage = this.changePage.bind(this);
    }

    navigate(page){
        let linkPage = (page == "post") ? "noticias" : page;
        Navigate.goToPage({page, link:properties.baseUrl+"/"+linkPage, title:page});
    }

    componentWillMount(){
    console.log(properties);
        NavigationStore.on("navigate", this.changePage);
    }

    componentWillUnmount(){
        NavigationStore.removeListener("navigate", this.changePage);
    }

    changePage(props){
        let { page } = props;
        if(page){
            this.setState({page});
            this.handleMenu(true);
        }
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
                                    <li role="presentation" className={page == "home" || page == "" ? "active":""}>
                                    <Link to={this.url("/")}>Home</Link>
                                    </li>
                                    <li role="presentation" className={page == "evento" ? "active":""}>
                                        <Link to={this.url("/evento")}>Eventos</Link>
                                    </li>
                                    <li role="presentation" className={page == "galeria" ? "active":""}>
                                        <Link to={this.url("/galeria")}>Galerias</Link>
                                    </li>
                                    <li role="presentation" className={page == "post" ? "active":""}>
                                        <Link to={this.url("/noticias")}>Notícias</Link>
                                    </li>
                                    <li role="presentation" className={page == "coluna" || page == "colunistas" ? "active":""}>
                                        <Link to={this.url("/colunistas")}>Colunistas</Link>
                                    </li>
                                    <li role="presentation" className={page == "eagora" ? "active":""}>
                                        <Link to={this.url("/eagora")}>E agora?</Link>
                                    </li>
                                    <li role="presentation" className={page == "contato" ? "active":""}>
                                        <Link to={this.url("/contato")}>Contato</Link>
                                    </li>
                                    <li role="presentation" className={page == "cinema" ? "active":""}>
                                        <Link to={this.url("/cinema")}>Cinema</Link>
                                    </li>
                                    <li role="presentation" className={page == "promocoes" ? "active":""}>
                                        <Link to={this.url("/promocoes")}>Promoções</Link>
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
