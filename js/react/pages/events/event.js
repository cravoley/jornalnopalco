import React from 'react';
import Moment from 'moment'
import ZoomableImage from 'components/zoomableImage';


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
        let formatedDate = Moment(this.props.post_date).format("DD/MM/YYYY")
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
