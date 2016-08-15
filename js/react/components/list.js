import { Component } from 'react';

export default class GenericList extends Component {


	html() {
		let { messageEmpty } = this.props;
		return {
			"__html": messageEmpty
		}
	}

	render() {
		let data;
		if (this.props.posts.length > 0) {
			data = this.props.posts.map(
				(data, i) => {
					return React.Children.map(this.props.children, (children)=> {
						return React.cloneElement(children, {...data, listIndex: i});
					});
				});
		} else if (this.props.loading == false) {
			data = <div class="empty message" dangerouslySetInnerHTML={this.html()} />
		}
		return (
			<ul className="list-unstyled">
				{data}
			</ul>
		);
	}
}
