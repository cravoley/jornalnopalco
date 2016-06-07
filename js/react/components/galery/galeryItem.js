import { Component } from 'react';
import Util from '../../util';

export default class GaleryItem extends Component {
    constructor(props){
        super(props);
    }

    navigate = (e) => {
        e.preventDefault();
        let { id, link } = this.props;
        this.props.navigate({id, link});
    }

    render(){
        let { link, title, post_date, thumb } = this.props
        let img;
        if(thumb){
            img = <div className="image pull-left">
                        <img className="img-responsive" src={thumb} title={title} />
                    </div>
        }
        return(
            <div className="col-xs-4 animated fadeInRightBig" onClick={this.navigate}>
                {img                    }
                <time dateTime={post_date}>
                    {Util.formatDate(new Date(post_date))}
                </time>
                <h1>
                    <a href={link}>
                        {title}
                    </a>
                </h1>
            </div>
        );
    }
}
