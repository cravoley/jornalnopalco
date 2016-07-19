import React from 'react';
import { Link } from 'react-router';
import Moment from 'moment'


export default class Colunista extends React.Component{

    constructor(props){
        super(props);
    }

    html = (content) => {return {"__html":content}};

    render(){
        let { avatar, name, lastPost } = this.props;
        let img;
        if(avatar){
            img = <div className="image pull-left">
                    <Link to={this.props.link}>
                        <img className="img-responsive" src={avatar} />
                    </Link>
                </div>;
        }
        let post;
        if(lastPost && lastPost.id){
            let { link, title, content, post_date } = lastPost;
            post =
            <div>
                <Link to={link}>
                    <time dateTime={post_date}>
                        {Moment(post_date).format("DD/MM/YYYY")}
                    </time>
                    <h2>{title}</h2>
                    <p dangerouslySetInnerHTML={this.html(content)} />
                </Link>
            </div>
        }
        return (
            <li className="clearfix">
                <div>
                    {img}
                    <Link to={this.props.link}>
                        <h1>{name}</h1>
                    </Link>
                    {post}
                </div>
            </li>
        );
    }

}
