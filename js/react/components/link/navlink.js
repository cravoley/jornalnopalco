import { Component } from 'react';
import { Link } from 'react-router';


export default class NavLink extends Link {

	//contextTypes() {
	//	return {
	//		router: React.PropTypes.object
	//	};
	//}

	render() {
		//console.log(this.context.router)
		//console.log(this.props.to);
		let isActive = this.context.router.isActive(this.props.to, true),
			className =
				(isActive ?
					this.props.activeClassName ? this.props.activeClassName
						: "active" : "") +
				(this.props.className ? " " + this.props.className : "");


		return (
			<li className={className}>
				<Link {...this.props}>
					{this.props.children}
				</Link>
			</li>
		);
	}
}