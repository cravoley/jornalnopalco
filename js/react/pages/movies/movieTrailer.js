import { Component } from 'react';
import { youtubeParser } from 'util';

export default class MovieTrailer extends Component {

    constructor(props){
        super(props);
        // let p = {};
        // p.videoId = youtubeParser(props.videoLink);
        // this.props = p;
        // console.log(props);
    }

    componentDidMount(){
        $(this.refs.html5lightbox).html5lightbox();
        // console.log(this.refs, this.refs.html5lightbox);

    }

    render(){
        let { videoId } = this.props;
        if(videoId){
            return (
                <div>
                    <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" ref="html5lightbox">
                        <img src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`} className="img-responsive" />
                    </a>
                </div>
            )
        } else {
            return (<div>Trailer ainda não disponível</div>);
        }
    }
}
