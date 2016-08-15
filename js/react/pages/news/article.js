import Breadcrumb from 'components/breadcrumb/breadcrumb';
import Metadata from 'components/metadata';
import properties from "stores/propertiesStore";
import LatestNews from './latestNews'
import React from 'react';
import Moment from 'moment'
import Waypoint from "react-waypoint";

export default class Article extends React.Component {

	html() {
		let { content } = this.props;
		return {
			"__html": content
		}
	}

	componentDidMount() {
		$(".html5lightbox").html5lightbox();
	}

	componentWillUnmount() {
		$(".html5lightbox").unbind("click");
	}

	// loadNextPost({ currentPosition, previousPosition }){
	//     if(currentPosition == Waypoint.inside && previousPosition != null){
	//         this.props.loadNextPost({currentPosition, previousPosition, id:this.props.id});
	//     }
	// }


	render() {
		let data = new Date(this.props.post_date);
		let formatedDate = Moment(this.props.post_date).format("DD/MM/YYYY");
		let path = [
			{name: "Notícias", link: properties.newsListPath},
			{name: this.props.title}
		];

		let { title, contentTruncated, fullImage, content } = this.props;
		let tags = {title, description: contentTruncated, image: fullImage, content};

		return (
			<div className="main post">
				<Breadcrumb path={path} />
				<Metadata {...tags} />

				<div className="row">
					<article className="col-xs-12 col-sm-8">
						<header>
							<h1>{this.props.title}</h1>
						</header>
						<time dateTime={data}>
							<span className="dateLabel">Postada em: </span>
							{this.props.post_date && formatedDate}
						</time>
						<div className="body" dangerouslySetInnerHTML={this.html()} />
					</article>
					<div className="col-sm-4 hidden-xs">
						<LatestNews current={this.props.id} />
					</div>
				</div>
			</div>
		)
	}
}
