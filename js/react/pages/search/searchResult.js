import { Component } from 'react';
import * as actions from 'actions/searchActions';
import List from 'pages/list';
import ListEntry from './searchEntry';
import store from 'stores/searchStore';



export default class SearchResultPage extends Component {

	constructor(props) {
		super(props);
		store.setQuery(this.props.params.searchQuery);
	}

	componentWillReceiveProps(props, newProps) {
		// console.log(props.params.searchQuery, newProps, props.params.searchQuery);
		store.setQuery(props.params.searchQuery);
		actions.loadPosts();
	}

	render() {
		return (
			<div className="newsList">
				<List actions={actions} store={store} messageEmpty={`Sua busca por <strong>${this.props.params.searchQuery}</strong> não retornou nenhum resultado.`}>
					<ListEntry />
				</List>
			</div>
		);
	}
}
