import { Component } from 'react';
import * as actions from 'actions/columnistActions';
import List from 'pages/list';
import ListEntry from './listEntry';

import store from 'stores/columnistStore';

export default class ColumnistList extends Component {


	render() {
		return (
			<List actions={actions} store={store} messageEmpty="Não existem posts cadastrados">
				<ListEntry />
			</List>
		);
	}
}
