import { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment'


export default class SearchEntry extends Component {
    render(){
        let img;
        if(this.props.thumb){
            img = (
                <div className="image pull-left">
                    <Link to={this.props.link}>
                        <img className="img-responsive" src={this.props.thumb} />
                    </Link>
                </div>);
            }
        let date = Moment(this.props.post_date).format("DD/MM/YYYY");
        return (
            <li className="clearfix">
                <div className="animated fadeInUp">
                    {img}
                    <Link to={this.props.link}>
                        <time dateTime={this.props.post_date}>
                            {date}
                        </time>
                        <h1>{this.props.title}</h1>
                        <h2>{this.props.place}</h2>
                    </Link>
                </div>
            </li>
        )
    }
}
