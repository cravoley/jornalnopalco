import React from 'react';
import Moment from 'moment'
import ZoomableImage from 'components/zoomableImage';

import Breadcrumb from 'components/breadcrumb/breadcrumb';
import properties from 'stores/propertiesStore';

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
        let formatedDate = Moment(this.props.post_date).format("DD/MM/YYYY");
        // console.log(this.props);
        let path = [
            {name:"Eventos", link:properties.eventListPath},
            {name:this.props.title}
        ];
        return (
            <div>
                <Breadcrumb path={path} />
                <div className="row">
                    <div className="col-xs-12">
                        <h1>{this.props.title}</h1>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <ZoomableImage thumb={this.props.thumb} fullImagePath={this.props.image} />
                            </div>
                            <div className="col-xs-12 col-sm-8">
                                <time dateTime={data}>
                                    {formatedDate}
                                </time>
                                <div className="body" dangerouslySetInnerHTML={this.html()} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}
