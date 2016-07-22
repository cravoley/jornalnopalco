import { Component } from 'react';
import * as actions from 'actions/columnistActions';
import ColumnistInfo from './columnistInfo';
import List from 'pages/list';
import ListEntry from './listEntry';

import store from 'stores/columnistStore';

export default class ColumnistList extends Component {

	constructor(props) {
		super(props);
		store.setColuminst(props.params.columnist);
	}


	render() {
		let { columnist} = this.props.params;
		return (
			<div className="row columnPost">
				<div className={"col-xs-12 "+(columnist?"col-sm-8":"")}>
					<List actions={actions} store={store} messageEmpty="Não existem posts cadastrados">
						<ListEntry />
					</List>
				</div>
				{
					columnist &&
					<div className="col-sm-4 hidden-xs">
						<ColumnistInfo name={this.props.params.columnist} />
					</div>
				}

			</div>
		);
	}
}
