import { Component } from 'react';

export default class Movie extends Component{

    html(){
        let { review } = this.props;
        return {
            "__html": review
        }
    }

    render(){
        return (
                <div dangerouslySetInnerHTML={this.html()} />
        );
    }
}
