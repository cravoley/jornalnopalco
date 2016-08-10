import Breadcrumb from 'components/breadcrumb/breadcrumb';
import Metadata from 'components/metadata';
import properties from "stores/propertiesStore";
import VideoPlayer from 'components/video/player';
import React from 'react';
import Moment from 'moment'

export default class EagoraVideo extends React.Component {

	html() {
		let { content } = this.props;
		return {
			"__html": content
		}
	}

	//componentDidMount() {
	//	$(".html5lightbox").html5lightbox();
	//}
	//
	//componentWillUnmount() {
	//	$(".html5lightbox").unbind("click");
	//}


	render() {
		let data = new Date(this.props.post_date);
		let formatedDate = Moment(this.props.post_date).format("DD/MM/YYYY");
		let path = [
			{name: "Eagora", link: properties.eagoraListPath},
			{name: this.props.title}
		];

		let { title, contentTruncated, fullImage, content } = this.props;
		let tags = {title, description: contentTruncated, image: fullImage, content};

		//console.log(this.props);
		let { videoId } = this.props;
		return (
			<div className="main post">
				<Breadcrumb path={path} />
				<Metadata {...tags} />

				<div className="row">
					<article className="col-xs-12">
						<header>
							<h1>{this.props.title}</h1>
						</header>
						<time dateTime={data}>
							<span className="dateLabel">Postada em: </span>
							{this.props.post_date && formatedDate}
						</time>
						<div className="body" dangerouslySetInnerHTML={this.html()} />
						{videoId && <VideoPlayer videoId={videoId} />}
					</article>
				</div>
			</div>
		)
	}
}
