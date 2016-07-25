import { Component } from 'react';
import ColumnistInfo from './columnistInfo';
import store from 'stores/columnistStore';


export default class ColumnistHolder extends Component {


	constructor(props) {
		super(props);
		store.setColuminst(props.params.columnist);
	}

	render() {
		let { columnist} = this.props.params;
		return (
			<div className="row columnPost">
				<div className={"col-xs-12 "+(columnist?"col-sm-8":"")}>
					{this.props.children}
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