import Moment from 'moment'
import { goToPost } from '../../actions/navigationActions';
import React from 'react';
import { Link } from 'react-router';


export default class Event extends React.Component{

    constructor(props){
        super(props);
    }

    navigate(e){
        e.preventDefault();
        // this.props.navigate({id:this.props.id, link:this.props.link});
        goToPost({post:this.props.id, link:this.props.link});
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
        let date = Moment(this.props.date).format("DD/MM/YYYY");
        return (
            <li>
                <div className="animated fadeInUp">
                    {img}
                    <Link to={this.props.link}>
                        <time dateTime={this.props.date}>
                            {date}
                        </time>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.place}</h2>
                    </Link>
                </div>
            </li>
        );
    }

}
