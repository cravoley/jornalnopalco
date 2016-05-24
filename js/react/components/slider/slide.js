import React from 'react';


export default class Slide extends React.Component{
    constructor(props){
        super(props);
        // this.props = props;
    }

    render(){
        // TODO: on click load post with JS
        return (
                <div>
                    <a href={this.props.link}>
                    {this.props.title}
                    </a>
                </div>
        );
    }
}
