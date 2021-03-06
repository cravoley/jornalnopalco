import { Component } from 'react';
import * as actions from 'actions/newsActions';
import List from 'pages/list';
//import ListEntry from './listEntry';
import ListEntry from './listEntry';
import store from 'stores/newsStore';

export default class NewsList extends Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div className="newsList">
				<List actions={actions} store={store} messageEmpty="Não existem noticias">
					<ListEntry />
				</List>
			</div>
		);
	}
}
