import { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment'


export default class SearchEntry extends Component {
	render() {
		let img;
		if (this.props.thumb) {
			img = (
				<div className="image col-xs-2 col-md-4">
					<Link to={this.props.link}>
						<img className="img-responsive" src={this.props.thumb} />
					</Link>
				</div>);
		}

		let date = Moment(this.props.post_date).format("DD/MM/YYYY");
		return (
			<li className="clearfix">
				<div className="animated fadeInUp">
					{img}
					<div className={(img)?"col-xs-10 col-md-8":"col-xs12"}>
						<time dateTime={this.props.post_date}>
							<Link to={this.props.link}>
								{date}
							</Link>
						</time>

						<h1><Link to={this.props.link}>{this.props.title}</Link></h1>

						<h2><Link to={this.props.link}>{this.props.place}</Link></h2>
					</div>
				</div>
			</li>
		)
	}
}
