import { Component } from 'react';
import { Link } from 'react-router';
import properties from "stores/propertiesStore";
import Search from 'components/search/searchBox';


export default class Menu extends Component {
    constructor(props) {
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
        let { page, collapsed="", displayMenu="" } = this.state;
        // <li role="presentation">
        //     <Link to={this.url("/promocoes")} activeClassName="active">Promoções</Link>
        // </li>
        return (
            <nav className={`navbar col-xs-12 ${this.props.menuType}`} ref="navbar">
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
                        <div className="searchBar col-md-2 col-sm-1 col-xs-12">
                            <Search {... this.props} />
                        </div>
                        <ul className="nav nav-pills col-md-10 col-sm-11 col-xs-12">
                            <li role="presentation" className="hidden-sm">
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
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
