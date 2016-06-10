import React from 'react';
import Util from '../../util';
import Waypoint from "react-waypoint";

export default class Article extends React.Component{

    html(){
        let { content } = this.props;
        return {
            "__html": content
        }
    }

    componentDidMount(){
        $(".html5lightbox").html5lightbox();
    }

    loadNextPost({ currentPosition, previousPosition }){
        if(currentPosition == Waypoint.inside && previousPosition != null){
            this.props.loadNextPost({currentPosition, previousPosition, id:this.props.id});
        }
    }

    render(){
        let data = new Date(this.props.post_date);
        let formatedDate = Util.formatDate(data);
        return(
            <div className="main">
                <h1>{this.props.title}</h1>
                <time dateTime={data}>
                    {formatedDate}
                </time>
                <div className="body" dangerouslySetInnerHTML={this.html()} />
                <Waypoint onEnter={this.loadNextPost.bind(this)} />
            </div>
        )
    }
}
