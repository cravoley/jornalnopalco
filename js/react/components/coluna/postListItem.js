import { Component } from 'react';
import Util from '../../util';


export default class PostListItem extends Component {
    constructor(props){
        super(props);
    }

    html = (content) => {return {"__html":content}};


    navigate(props){
        let { link, id, colunista } = this.props;
        this.props.navigate({link, id, colunista});
    }

    render(){
        let { title, link, author, content, post_date } = this.props;
        return(
            <div onClick={this.navigate.bind(this)}>
                <time dateTime={post_date}>
                    {Util.formatDate(new Date(post_date))}
                </time>
                <a href={link} onClick={(e)=>e.preventDefault()}>
                    <h1>{title}</h1>
                    <p dangerouslySetInnerHTML={this.html(content)} />
                </a>
            </div>
        );
    }
}
