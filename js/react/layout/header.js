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
*/
import React from 'react';

export default class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {page:""};
    }

    navigate(page){
        // call parent method
        this.setState({page:page});
        this.props.navigate({page:page});
    }

    render(){
        var logoUrl = this.props.baseUrl.concat('/img/logo.png');
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
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#awdawdawdaw" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                            </div>
                            <div className="collapse navbar-collapse navigation" id="awdawdawdaw">
                                <ul className="nav nav-pills">
                                    <li role="presentation" className={this.state.page == "home" || this.state.page == "" ? "active":""}><a onClick={this.navigate.bind(this,'home')}>Home</a></li>
                                    <li role="presentation" className={this.state.page == "event" ? "active":""}><a onClick={this.navigate.bind(this,'event')}>Eventos</a></li>
                                    <li role="presentation" className={this.state.page == "galeria" ? "active":""}><a onClick={this.navigate.bind(this,'galeria')}>Galerias</a></li>
                                    <li role="presentation" className={this.state.page == "post" ? "active":""}><a onClick={this.navigate.bind(this,'post')}>Notícias</a></li>
                                    <li role="presentation" className={this.state.page == "colunas" ? "active":""}><a onClick={this.navigate.bind(this,'colunas')}>Colunas</a></li>
                                    <li role="presentation" className={this.state.page == "eagora" ? "active":""}><a onClick={this.navigate.bind(this,'eagora')}>E Agora?</a></li>
                                    <li role="presentation" className={this.state.page == "contato" ? "active":""}><a onClick={this.navigate.bind(this,'contato')}>Contato</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
