import { Component } from 'react';

export default class MovieCast extends Component {

    html(){
        let { cast } = this.props;
        return {
            "__html": cast
        }
    }

    render(){
        return (
                <div dangerouslySetInnerHTML={this.html()} />
        );
    }
}
