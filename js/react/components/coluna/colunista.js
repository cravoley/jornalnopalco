import React from 'react';
import Util from '../../util';


export default class Colunista extends React.Component{

    constructor(props){
        super(props);
    }

    navigate(e){
        e.preventDefault();
        let { link, nice_name } = this.props;
        this.props.navigate({link, page:"coluna", colunista: nice_name});
    }

    navigateLastPost = (e) => {
        e.preventDefault();
        let { link, id} = this.props.lastPost || {};
        this.props.navigate({link, id, colunista: this.props.nice_name});
    }

    html = (content) => {return {"__html":content}};

    render(){
        let { avatar, name, lastPost } = this.props;
        let img;
        if(avatar){
            img = <div className="image pull-left">
                    <a onClick={this.navigate.bind(this)} href={this.props.link}>
                        <img className="img-responsive" src={avatar} />
                    </a>
                </div>;
        }
        let post;
        if(lastPost && lastPost.id){
            let { link, title, content, post_date } = lastPost;
            post =
            <div onClick={this.navigateLastPost}>
                <a href={link}>
                    <time dateTime={post_date}>
                        {Util.formatDate(new Date(post_date))}
                    </time>
                    <h2>{title}</h2>
                    <p dangerouslySetInnerHTML={this.html(content)} />
                </a>
            </div>
        }
        return (
            <li>
                <div>
                    {img}
                    <a href={this.props.link} onClick={this.navigate.bind(this)}>
                        <h1>{name}</h1>
                    </a>
                    {post}
                </div>
            </li>
        );
    }

}
