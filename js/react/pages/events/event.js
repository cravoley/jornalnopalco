import React from 'react';
import Util from '../../util';
import ZoomableImage from '../../components/generic/zoomableImage';


export default class Event extends React.Component{
    constructor(props){
        super(props);
    }

    html(){
        let { content } = this.props;
        return {
            "__html": content
        }
    }

    render(){
        let data = new Date(this.props.post_date);
        let formatedDate = Util.formatDate(data);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <time dateTime={data}>
                    {formatedDate}
                </time>
                <ZoomableImage thumb={this.props.thumb} fullImagePath={this.props.image} />
                <div className="body" dangerouslySetInnerHTML={this.html()} />
            </div>
        )
    }

}
