import { Component } from 'react';
import * as actions from 'actions/galeriesActions';
import Image from './image';
import Loading from 'components/loading';
import store from 'stores/galeries';

import Breadcrumb from 'components/breadcrumb/breadcrumb';
import properties from 'stores/propertiesStore';

export default class Gallery extends Component {

	constructor(props) {
		super(props);
		this.state = {loading: true, post: {}};
		actions.getPost(props.params);
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
		this.setState({loading: false, post: props || {}});
		$(".html5lightbox").html5lightbox();
	}

	componentDidMount() {
	}

	render() {
		let path = [
			{name: "Galerias de fotos", link: properties.galleryListPath},
			{name: this.state.post.title}
		];
		let pics = this.state.post.pics ? this.state.post.pics.map((pic, i) => <Image key={pic.id} listIndex={i} {...pic} />) : "";
		return (
			<div>
				<Breadcrumb path={path} />

				<div className="row">
					<div className="col-xs-12">
						<h1>{this.state.post.title}</h1>
					</div>
				</div>
				<div className="row">
					{pics}
				</div>
				<div className="clearfix"></div>
				{ this.state.loading && <Loading />}
			</div>
		);
	}
}
