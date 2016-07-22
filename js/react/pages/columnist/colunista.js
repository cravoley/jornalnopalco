import React from 'react';
import { Link } from 'react-router';
import Moment from 'moment'


export default class Colunista extends React.Component {

	constructor(props) {
		super(props);
	}

	html = (content) => {
		return {"__html": content}
	};

	render() {
		let { avatar, name, lastPost } = this.props;
		let img;
		if (avatar) {
			img = <div className="image col-xs-2">
				<Link to={this.props.link}>
					<img className="img-responsive" src={avatar} />
				</Link>
			</div>;
		}
		let post;
		if (lastPost && lastPost.id) {
			let { link, title, content, post_date } = lastPost;
			post =
				<div>

					<time dateTime={post_date}>
						Último post: {Moment(post_date).format("DD/MM/YYYY")}
					</time>
					<h2><Link to={link}>{title}</Link></h2>

					<p dangerouslySetInnerHTML={this.html(content)} />

				</div>
		}
		return (
			<li>
				<div className="animated fadeInUp row">
					{img}
					<div className={(img)?"col-xs-10":"col-xs12"}>
						<Link to={this.props.link}>
							<h1>{name}</h1>
						</Link>
						{post}
					</div>
				</div>
			</li>
		);
	}

}
