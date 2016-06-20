import { Component } from 'react';

export default class MovieStoryline extends Component{

    html(){
        let { storyline } = this.props;
        return {
            "__html": storyline
        }
    }

    render(){
        return (
                <div dangerouslySetInnerHTML={this.html()} />
        );
    }
}
