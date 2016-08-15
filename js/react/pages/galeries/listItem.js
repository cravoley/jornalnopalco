import { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment'
import store from 'stores/galeries';

export default class GalleryItem extends Component {


	render() {
		let { link, title, post_date, thumb } = this.props
		let img;
		if (thumb) {
			img = <div className="image">
				<Link to={link}>
					<img className="img-responsive" src={thumb} title={title} />
				</Link>
			</div>
		}
		let date = Moment(post_date).format("DD/MM/YYYY");
		return (
			<li className="col-xs-4" style={this.props.listIndex % 3==0?{clear:"left"}:{}}>
				<div className={"gallery "+((img)?"withThumb":"")}>
					{img}
					<time dateTime={post_date}>
						<Link to={link}>
							{date}
						</Link>
					</time>
					<h1>
						<Link to={link}>
							{title}
						</Link>
					</h1>
				</div>
			</li>
		);
	}
}
