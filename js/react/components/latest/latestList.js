import { Component } from 'react';
import { Link } from 'react-router';
import Loading from 'components/loading';
import Moment from 'moment'

export default class LastestList extends Component {


	render() {
		let { loading, posts } = this.props;
		let list = posts.map((post, i)=> {
			let current = this.props.current && this.props.current == post.id;
			//console.log(post);
			let formatedDate = <time date={post.post_date}>{Moment(post.post_date).format("DD/MM/YYYY")} - </time>;
			return (
				<li key={i}>
					{!current && <Link to={post.link}>{post.post_date && formatedDate} {post.title}</Link>}
					{current && <span className="current">{post.title}</span>}
				</li>
			);
		});
		return (
			<div className="latestPosts">
				<div className="row">
					<div className="col-xs-12">
						<h2>Últimas {this.props.title}</h2>
						{ loading && <Loading />}
						{ !loading && <ul className="list-unstyled">{list}</ul> }
					</div>
				</div>
			</div>
		);
	}
}
