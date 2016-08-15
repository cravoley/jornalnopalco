import { Component } from 'react';


export default class VideoPlayer extends Component {


	componentDidMount() {
		$(this.refs.html5lightbox).html5lightbox();
	}

	componentWillUnmount() {
		$(this.refs.html5lightbox).unbind("click");
	}

	render() {
		let { videoId } = this.props;
		return (
			<div className="videoPlayer">
				<div className="play" onClick={() => {$(this.refs.html5lightbox).trigger("click")}} />
				<a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" ref="html5lightbox">
					<img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} className="img-responsive" />
				</a>
			</div>
		);
	}
}
