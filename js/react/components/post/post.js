import React from 'react';
import Util from '../../util';


export default class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = props.content;
    }

    navigate(props){
        this.props.navigate({id:this.state.id, link:this.state.link});
    }

    render(){
        let img;
        if(this.state.img){
            img = <div className="image pull-left">
                    <a onClick={this.navigate.bind(this, this.props)} href="javascript:void(0);">
                        <img className="img-responsive" src={this.state.img} />
                    </a>
                </div>;
            }
        return (
            <li>
                <div>
                    {img}
                    <a onClick={this.navigate.bind(this, this.props)} href="javascript:void(0);">
                        <time dateTime={this.state.date}>
                            {Util.formatDate(new Date(this.state.post_date))}
                        </time>
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.place}</h2>
                    </a>
                </div>
            </li>
        );
    }

}
