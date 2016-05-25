import React from 'react';
import Util from '../../util';


export default class PostComponent extends React.Component{
    constructor(props){
        super(props);
    }

    html(){
        return {
            "__html":this.props.content
        }
    }

    render(){
        let data = new Date(this.props.post_date);
        let formatedDate = Util.formatDate(data);
        return(
            <div className="main col-sm-8 col-xs-12">
                <time dateTime={data}>
                    {formatedDate}
                </time>
                <div className="body" dangerouslySetInnerHTML={this.html()}>
                </div>
            </div>
        )
    }
}
