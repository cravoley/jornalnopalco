import Breadcrumb from 'components/breadcrumb/breadcrumb';
import { Component } from 'react';
import { getPost } from 'actions/moviesActions';
import Loading from 'components/loading';
import properties from "stores/propertiesStore";
import store from 'stores/movies';
import NavLink  from 'components/link/navlink';

export default class MovieHolder extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true, post: {}};
		getPost(this.props.params);
	}

	componentWillMount() {
		store.on("change", this.handleChange);
		// postStore.on("loading", this.setLoading);
	}

	componentWillUnmount() {
		// actions.clear();
		store.removeListener("change", this.handleChange);
		// postStore.removeListener("loading", this.setLoading);
	}

	handleChange = (props)=> {
		// let { posts, hasMore } = this.getStoreState();
		this.setState({loading: false, post: props});
	}

	link = (target)=> {
		target = `/${target}`;
		return this.props.location.pathname.replace(/\/\w+$/i, target);
		// return `${properties.relativeUrl}/cinema/${this.props.params.slug}/${target}`;
	}

	render() {

		let { post } = this.state;

		let children = React.Children.map(this.props.children, (children)=> {
			return React.cloneElement(children, post);

		});

		let path = [
			{name: "Filmes", link: properties.moviesListPath},
			{name: post.title}
		];

		if (this.state.loading) {
			return <Loading />
		} else {
			return (
				<article>
					<Breadcrumb path={path} />
					<header>
						<h1>{post.title}</h1>
					</header>
					<div className="row">
						<div className="col-xs-12">
							<ul className=" nav nav-tabs">
								<NavLink to={this.link("critica")} activeClassName=" active">Critica</NavLink>
								<NavLink to={this.link("session")} activeClassName=" active">Sessões</NavLink>
								<NavLink to={this.link("sinopse")} activeClassName=" active">Sinopse</NavLink>
								<NavLink to={this.link("ficha")} activeClassName=" active">Ficha técnica</NavLink>
								<NavLink to={this.link("trailer")} activeClassName=" active">Trailer</NavLink>
							</ul>
						</div>
					</div>
					<div className=" row">
						<article className=" col-xs-12">
							{children}
						</article>
					</div>
				</article>
			);
		}
	}
}
