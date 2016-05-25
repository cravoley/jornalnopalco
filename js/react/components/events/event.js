import React from 'react';
import Util from '../../util';


export default class Event extends React.Component{

    constructor(props){
        super(props);
        this.state = props.content;
    }

    navigate(props){
        this.props.navigate({id:this.state.id, link:this.state.link});
    }

    render(){
        return (
            <li>
                <div>
                    <div className="image pull-left">
                        <a onClick={this.navigate.bind(this, this.props)}>
                            <img src="http://lorempixel.com/400/200/" />
                        </a>
                    </div>
                    <time dateTime={this.state.date}>
                        {Util.formatDate(new Date(this.state.date))}
                    </time>
                        <h1>{this.state.title.rendered}</h1>
                </div>
            </li>
        );
    }

}
