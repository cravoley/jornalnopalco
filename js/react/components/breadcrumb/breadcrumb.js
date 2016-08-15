import { Component } from 'react';
import { Link } from 'react-router';
import properties from "stores/propertiesStore";

export default class Breadcrumb extends Component {

    getItem(label, index, lastItem, link){
        if(link && !lastItem){
            return (
                <li key={index}>
                    <Link to={link}>
                        {label}
                    </Link>
                </li>
            );
        } else {
            return (
                <li key={index} className={(lastItem?"active":"")}>{label}</li>
            );
        }
    }

    render(){
        let breadcrumbSize = this.props.path.length;

        let lis = this.props.path.map((content, i)=>{
            let lastItem = i == (breadcrumbSize - 1);
            if('object' == typeof content){
                return this.getItem (content.name, i, lastItem, content.link);
            } else {
                return this.getItem(content, i, lastItem);
            }
        });

        return (
            <div className="row">
                <div className="col-xs-12">
                    <ol className="breadcrumb">
                        <li><Link to={properties.relativeUrl+"/"}>Home</Link></li>
                        {lis}
                    </ol>
                </div>
            </div>
        )
    }
}
