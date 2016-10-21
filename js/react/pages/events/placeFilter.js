import React from 'react';

export default class EventFilterComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {selected: props.selected};
		this.filter = this.filter.bind(this);
	}


	filter = ()=> {
		this.setState({selected: !this.state.selected});
		this.props.filter(this.props.name_sanitized);
	};

	render() {
		return (
			<li>
				<label className={this.state.selected ? 'selected' : ''}>
					<input type="checkbox" checked={this.state.selected} onChange={this.filter} disabled={this.props.disabled}/> {this.props.name}
				</label>
			</li>
		);
	}
}
