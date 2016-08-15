import { Component } from 'react';


export default class GalleryHolder extends Component {
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}
