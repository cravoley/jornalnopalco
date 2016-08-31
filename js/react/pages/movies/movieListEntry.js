import Moment from 'moment'
import React from 'react';
import { Link } from 'react-router';


export default class MovieEntry extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let img;
		if (this.props.img) {
			img = (
				<div className="image col-xs-2 col-md-4">
					<Link to={this.props.link}>
						<img className="img-responsive" src={this.props.img} />
					</Link>
				</div>);
		}

		// let date = Moment(this.props.date).format("DD/MM/YYYY");
		return (
			<li className="clearfix">
				<div className="animated fadeInUp">
					{img}
					<div className={(img)?"col-xs-10 col-md-8":"col-xs-12"}>
						<h1><Link to={this.props.link}>{this.props.title}</Link></h1>
					</div>
				</div>
			</li>
		);
	}

}
