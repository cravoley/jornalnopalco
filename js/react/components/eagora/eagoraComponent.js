import React from 'react';
import PostBody from "./body";


export default class EagoraComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <article>
                <h1>{this.props.title}</h1>
                <PostBody {...this.props} />
            </article>
        )
    }
}
