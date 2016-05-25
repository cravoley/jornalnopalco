import React from 'react';


export default class Slide extends React.Component{
    constructor(props){
        super(props);
        // this.props = props;
        this.navigate = this.props.navigate.bind(this, this.props.id);
    }

    navigate(){
        console.log(this.props.navigate);
    }

    render(){
        // TODO: on click load post with JS
        return (
                <div>
                    <a onClick={this.navigate}>
                    {this.props.title}
                    </a>
                </div>
        );
    }
}
