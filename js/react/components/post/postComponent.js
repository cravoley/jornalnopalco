import React from 'react';
import PostSidebar from './postSidebar';
import PostBody from "./postBody";


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
        return(
            <article>
                <h1>{this.props.title}</h1>
                <PostBody {...this.props} />
                <PostSidebar {...this.props} />
            </article>
        )
    }
}
