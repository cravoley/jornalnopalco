import Layout from './layout/app';
import EventPage from './pages/eventPage';
import GaleriesPage from './pages/galeriesPage'
import * as navigationActions from './actions/navigationActions';
import navigationStore from './stores/navigationStore';
import Post from './pages/post';
import properties from './stores/propertiesStore';
import Page from './components/page'
import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class App extends React.Component{
    constructor(props){
        super(props);
        properties.setConfiguration(props.configuration);
        this.rootRoute = {
            component: 'div',
            childRoutes: [{
                path: properties.relativeUrl || "/",
                component: require('./layout/app'),
                childRoutes: [
                    require('./routes/event/eventRoute')
                ]
            }]
        };
    }



    render(){
        return(
            <Router history={browserHistory} routes={this.rootRoute} />
        )
    }

    renderContent(){
        let { page, post } = this.state;
        if(page){
            switch (page) {
                case "evento":
                    return <EventPage />
                    break;
                case 'galeria':
                    return <GaleriesPage />
                default:

            }
        } else if(post){
            return <Post id={post} />
        }
    }
}


render(<App configuration={window.configuration} />, document.getElementById("content"));
