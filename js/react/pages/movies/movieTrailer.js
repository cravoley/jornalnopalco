import { Component } from 'react';
import VideoPlayer from 'components/video/player';

export default class MovieTrailer extends Component {
	render() {
		let { videoId } = this.props;
		if (videoId) {
			return <VideoPlayer videoId={videoId} />;
		} else {
			return (<div>Trailer ainda não disponível</div>);
		}
	}
}
