import { Component } from 'react';

export default class Breadcrumb extends Component {
    render(){
        this.props = {
            type:"Galeria",
            postTitle:"Post name"
        }
        return (
            <div className="breadcrumb row">
                <ul className="list-unstyled list-inline">
                    <li>Home</li>
                    <li>{this.props.type}</li>
                    <li>{this.props.postTitle}</li>
                </ul>
            </div>
        )
    }
}
