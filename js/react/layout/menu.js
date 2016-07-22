import { Component } from 'react';
import { Link } from 'react-router';
import properties from "stores/propertiesStore";
import Search from 'components/search/searchBox';
import NavLink from 'components/link/navlink';


export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleMenu(hide) {
		if (hide === true) {
			this.setState({collapsed: "", displayMenu: ""});
		} else {
			this.setState(
				{
					collapsed: this.state.collapsed == "collapsed" ? "" : "collapsed",
					displayMenu: this.state.displayMenu == "in" ? "" : "in"
				}
			);
		}
	}

	url(path) {
		return properties.relativeUrl + path;
	}

	render() {
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
							<NavLink to={this.url("/")} className="hidden-sm">Home</NavLink>
							<NavLink to={this.url("/evento")}>Eventos</NavLink>
							<NavLink to={this.url("/galeria")}>Galerias</NavLink>
							<NavLink to={this.url("/noticias")}>Notícias</NavLink>
							<NavLink to={this.url("/colunistas")}>Colunistas</NavLink>
							<NavLink to={this.url("/eagora")}>E agora?</NavLink>
							<NavLink to={this.url("/contato")}>Contato</NavLink>
							<NavLink to={this.url("/cinema")}>Cinema</NavLink>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}
