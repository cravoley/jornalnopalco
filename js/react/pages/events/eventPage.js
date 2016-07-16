import { Component } from 'react';
import Event from './event';
import Post from 'pages/news/news';


export default class EventPage extends Component{
    constructor(props){
        super(props);
        this.props.params.post_type = "evento";
    }

    render(){
        return (
            <Event {...this.props} />
        );
    }

}
