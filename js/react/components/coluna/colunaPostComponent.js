import React from 'react';
import Util from '../../util';


export default class ColunaPostComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
    }

    html = (content) => {return {"__html":content}};

    componentDidMount(){
        $(".html5lightbox").html5lightbox();
    }

    render(){
        let { title, post_date, content } = this.props;
        return (
            <div>
                <time dateTime={post_date}>
                    {Util.formatDate(new Date(post_date))}
                </time>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={this.html(content)}>

                </div>
            </div>
        );
    }

}
