import React from 'react';
import Util from '../../util';


export default class Eagora extends React.Component{

    constructor(props){
        super(props);
    }

    navigate(e){
        e.preventDefault();
        this.props.navigate({id:this.props.id, link:this.props.link});
    }

    render(){
        let img;
        if(this.props.img){
            img = <div className="image pull-left">
                    <a onClick={this.navigate.bind(this)} href={this.props.link}>
                        <img className="img-responsive" src={this.props.img} />
                    </a>
                </div>;
        }

        return (
            <li>
                <div className="animated fadeInUp">
                    {img}
                    <a onClick={this.navigate.bind(this)} href={this.props.link}>
                        <time dateTime={this.props.post_date}>
                            {Util.formatDate(new Date(this.props.post_date))}
                        </time>
                        <h1>{this.props.title}</h1>
                    </a>
                </div>
            </li>
        );
    }

}
