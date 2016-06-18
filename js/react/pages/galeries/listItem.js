import { Component } from 'react';
import { Link } from 'react-router';
import Moment from 'moment'
import store from 'stores/galeries';

export default class GalleryItem extends Component {


    render(){
        let { link, title, post_date, thumb } = this.props
        let img;
        if(thumb){
            img = <div className="image pull-left">
                        <img className="img-responsive" src={thumb} title={title} />
                    </div>
        }
        let date = Moment(post_date).format("DD/MM/YYYY");
        return(
            <div className="col-xs-4">
                <Link to={link}>
                {img}
                </Link>
                <Link to={link}>
                    <time dateTime={post_date}>
                        {date}
                    </time>
                    <h1>
                        {title}
                    </h1>
                </Link>
            </div>
        );
    }
}
