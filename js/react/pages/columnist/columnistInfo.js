import { Component } from 'react';
import { loadColunistInfo } from 'actions/columnistActions'
import store from 'stores/columnistStore';


export default class ColumnistInfo extends Component {

	constructor(props) {
		super(props);
		let { name } = props;
		// console.log(props);
		if (name) {
			loadColunistInfo(name);
		}
		this.state = {info: {}};
	}


	componentWillMount() {
		store.on("loadedColunistInfo", this.handleChange);
		// postStore.on("loading", this.setLoading);
	}

	componentWillUnmount() {
		// actions.clear();
		store.removeListener("loadedColunistInfo", this.handleChange);
		// postStore.removeListener("loading", this.setLoading);
	}

	handleChange = (info) => {
		this.setState({info});
		//console.log(info);
	}


	render() {
		console.log(this.state);
		let { name, link, avatar, description, twitter, facebook, gplus} = this.state.info || {};

		return (
			<div>
				<div>
					<img src={avatar} />
				</div>
				<h2>{name}</h2>
				{description}

				{twitter}
				{facebook}
				{gplus}
			</div>
		)
	}
}
