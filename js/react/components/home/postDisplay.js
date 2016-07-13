import { Component } from 'react';
import { Link } from 'react-router';

export default class PostDisplay extends Component {


    render(){
        let { img, link, title, layout } = this.props;
        if(layout && layout == "big")
            layout = "col-xs-12 col-md-6 big";
        else
            layout = "col-xs.12 col-md-3 small";
        let cats = this.props.categories.map((cat)=>cat.slug).map((cat)=>cat.toLowerCase()).map((cat)=>cat.replace(/-/gi,"_")).join(" ");
        return (
            <div className={`post ${cats} ${layout}`}>
                <Link to={link}>
                    <img src={img} title={title} className="img-responsive" />
                </Link>
                <div className="title-container">
                    <div className="title">
                        <h1><Link to={link}>{title}</Link></h1>
                    </div>
                </div>                    
            </div>
        )
    }
}
