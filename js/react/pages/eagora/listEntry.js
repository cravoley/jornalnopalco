import Moment from 'moment'
import React from 'react';
import {Link} from 'react-router';


export default class PostEntry extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let img;
		if (this.props.thumb) {
			img = (
				<div className="image col-xs-2 col-md-4">
					<Link to={this.props.link}>
						<img className="img-responsive" src={this.props.thumb}/>
					</Link>
				</div>);
		}
		//console.log(this.props);
		let date = Moment(this.props.post_date).format("DD/MM/YYYY");
		return (
			<li>
				<div className="animated fadeInUp">
					<div className="row">
						{img}
						<div className={(img) ? "col-xs-10 col-md-8" : "col-xs-12"}>
							<time dateTime={this.props.post_date}>
								<Link to={this.props.link}>
									{date}
								</Link>
							</time>

							<h1><Link to={this.props.link}>{this.props.title}</Link></h1>

							<h2><Link to={this.props.link}>{this.props.place}</Link></h2>

						</div>
					</div>
				</div>
			</li>
		);
	}

}
