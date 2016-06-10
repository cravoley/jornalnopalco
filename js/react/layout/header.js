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

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {page:props.page || "", collapsed:"collapsed", displayMenu:""};
        this.changePage = this.changePage.bind(this);
    }

    navigate(page){
        // call parent method
        // this.setState({page:page});
        // this.setState({page});
        let linkPage = (page == "post") ? "noticias" : page;
        // this.props.navigate({page:page, link:this.props.baseUrl+"/"+linkPage});
        Navigate.goToPage({page, link:properties.baseUrl+"/"+linkPage, title:page});
        properties.getConfiguration();
    }

    componentWillMount(){
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
                                    <li role="presentation" className={page == "home" || page == "" ? "active":""}><a onClick={this.navigate.bind(this,'home')} href="javascript:void(0);">Home</a></li>
                                    <li role="presentation" className={page == "evento" ? "active":""}><a onClick={this.navigate.bind(this,'evento')} href="javascript:void(0);">Eventos</a></li>
                                    <li role="presentation" className={page == "galeria" ? "active":""}><a onClick={this.navigate.bind(this,'galeria')} href="javascript:void(0);">Galerias</a></li>
                                    <li role="presentation" className={page == "post" ? "active":""}><a onClick={this.navigate.bind(this,'post')} href="javascript:void(0);">Notícias</a></li>
                                    <li role="presentation" className={page == "coluna" || page == "colunistas" ? "active":""}><a onClick={this.navigate.bind(this,'colunistas')} href="javascript:void(0);">Colunistas</a></li>
                                    <li role="presentation" className={page == "eagora" ? "active":""}><a onClick={this.navigate.bind(this,'eagora')} href="javascript:void(0);">E Agora?</a></li>
                                    <li role="presentation" className={page == "contato" ? "active":""}><a onClick={this.navigate.bind(this,'contato')} href="javascript:void(0);">Contato</a></li>
                                    <li role="presentation" className={page == "cinema" ? "active":""}><a onClick={this.navigate.bind(this,'cinema')} href="javascript:void(0);">Cinema</a></li>
                                    <li role="presentation" className={page == "cinema" ? "active":""}><a onClick={this.navigate.bind(this,'promocoes')} href="javascript:void(0);">Promoções</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
