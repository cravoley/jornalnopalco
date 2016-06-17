import Layout from './layout/app';
import CinemaList from './pages/cinema/cinemaList';
import MovieHolder from './pages/cinema/movieHolder';
import Movie from './pages/cinema/movie';
import MovieSession from './pages/cinema/movieSession';
import EventPage from './pages/eventPage';
import HomePage from './pages/home';
import GaleriesPage from './pages/galeriesPage'
import * as navigationActions from './actions/navigationActions';
import navigationStore from './stores/navigationStore';
import Post from './pages/post';
import properties from './stores/propertiesStore';
import Page from './components/page'
import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router'
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
                    <IndexRedirect to="home"/>
                    <Route path="home" component={HomePage} />
                    <Route path="evento" component={EventListPage}>
                        // event list
                    </Route>
                    <Route path="evento/:place/:year/:month/:day/:title">
                        // single event
                    </Route>
                    <Route path="cinema">
                        <IndexRoute component={CinemaList}/>
                        <Route path=":movie" component={MovieHolder}>
                            <IndexRedirect to="critica"/>
                            <Route path="critica" component={Movie} />
                            <Route path="session" component={MovieSession} />
                            <Redirect from="*" to="critica" />
                        </Route>
                        // <Route path="*" component={CinemaList} />
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
