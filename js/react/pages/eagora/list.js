import { Component } from 'react';
import * as actions from 'actions/eagoraActions';
import List from 'pages/list';
//import ListEntry from './listEntry';
import ListEntry from './listEntry';
import store from 'stores/eagoraStore';

export default class EagoraList extends Component {

	constructor() {
		super();
	}


	render() {
		return (
			<div className="newsList">
				<List actions={actions} store={store} messageEmpty="Não existem vídeos">
					<ListEntry />
				</List>
			</div>
		);
	}
}
