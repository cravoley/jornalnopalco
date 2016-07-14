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
import { Link } from 'react-router';
import Logo from './logo';
import Menu from './menu';
import properties from "../stores/propertiesStore";

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuType:"large"
        };
    }



    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollTop = event.srcElement.body.scrollTop;
        if(scrollTop > 100){
            this.setState({
                menuType:"navbar-fixed-top"
            });
        } else {
            this.setState({
                menuType:"large"
            });
        }
    }



    url(path){
        return properties.relativeUrl+path;
    }


    render(){
        var logoUrl = properties.templateUrl.concat('/img/logo_preto.png');
        return(
            <header>
                <div className="container">
                    {this.state.menuType == 'large' && <Logo logoUrl={logoUrl} url={this.url} />}
                    <div className="row">
                        <Menu menuType={this.state.menuType} />
                    </div>
                </div>
            </header>
        )
    }
}
