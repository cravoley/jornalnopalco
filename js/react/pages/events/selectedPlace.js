import { Component } from 'react';

export default class SelectedPlace extends Component {

	constructor(props) {
		super(props);
	}


	filter = (e)=> {
		e.preventDefault();
		e.stopPropagation();
		this.props.removeFilter(this.props.name_sanitized);
	};

	render() {
		let bg = "bg" + this.props.index % 2;
		return (
			<li className={bg}>
				<span className="name">{this.props.name}</span>
				<span className="remove" onClick={this.filter}>X</span>
			</li>
		)
	}
}
