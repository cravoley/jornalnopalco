import Moment from 'moment'
import React from 'react';
import { Link } from 'react-router';


export default class MovieEntry extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        let img;
        if(this.props.img){
            img = (
                <div className="image pull-left">
                    <Link to={this.props.link}>
                        <img className="img-responsive" src={this.props.img} />
                    </Link>
                </div>);
            }
        // let date = Moment(this.props.date).format("DD/MM/YYYY");
        return (
            <li>
                <div className="animated fadeInUp">
                    {img}
                    <Link to={this.props.link}>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.place}</h2>
                    </Link>
                </div>
            </li>
        );
    }

}
