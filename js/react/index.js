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
import EventListPage from './pages/eventListPage';
import baseApp from './layout/app';

class Simple extends React.Component{
    render(){
        return <div>oi</div>;
    }
}


export default class App extends React.Component{
    constructor(props){
        super(props);
        properties.setConfiguration(props.configuration);
    }



    render(){
        return(
            <Router history={browserHistory}>
                <Route path={properties.relativeUrl || "/"} component={baseApp}>
                    <Route path="evento" component={EventListPage}>

                    </Route>
                    <Route path="evento/:place/:year/:month/:day/:title">
                    </Route>
                </Route>
            </Router>
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
