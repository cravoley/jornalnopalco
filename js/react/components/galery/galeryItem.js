import { Component } from 'react';
import Util from '../../util';

export default class GaleryItem extends Component {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], type:props.type};
    }

    navigate = (e) => {
        e.preventDefault();
        let { id, link } = this.props;
        this.props.navigate({id, link});
    }

    render(){
        let { link, title, date, image } = this.props
        let img;
        if(image){
            img = <div className="image pull-left">
                        <img className="img-responsive" src={image} title={title} />
                    </div>
        }
        return(
            <div className="col-xs-4" onClick={this.navigate}>
                {img                    }
                <time dateTime={date}>
                    {Util.formatDate(new Date(date))}
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
