import baseApp from './layout/app';
import CinemaList from './pages/cinema/cinemaList';
import EventListPage from './pages/eventListPage';
import Evento from './pages/events/evento';
import EventPage from './pages/events/eventPage';
import GaleriesPage from './pages/galeriesPage'
import HomePage from './pages/home';
import Layout from './layout/app';
import MovieHolder from './pages/cinema/movieHolder';
import Movie from './pages/cinema/movie';
import MovieSession from './pages/cinema/movieSession';
import * as navigationActions from './actions/navigationActions';
import navigationStore from './stores/navigationStore';
import Post from './pages/posts/post';
import PostList from './pages/posts/list';
import Page from './components/page'
import properties from './stores/propertiesStore';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router'


export default class App extends React.Component{
    constructor(props){
        super(props);
        properties.setConfiguration(props.configuration);
        this.route = {
            path:properties.relativeUrl || "/",
            component:baseApp,
            indexRoute: { component:HomePage },
            childRoutes:[
                {
                    path:"home",
                    component:HomePage
                },
                {
                    path:"evento",
                    indexRoute:{component:EventListPage},
                    childRoutes:[
                        {
                            path:":place/:year/:month/:day/:slug",
                            component:EventPage
                        }
                    ]
                },
                {
                    path:"cinema",
                    indexRoute:{component:CinemaList},
                    childRoutes:[
                        {
                            path:":movie",
                            component:MovieHolder,
                            // redirect to currentURL/critica
                            indexRoute: { onEnter: (nextState, replace) => replace(nextState.location.pathname+'/critica') },
                            childRoutes:[
                                {
                                    path:"critica",
                                    component:Movie
                                },
                                {
                                    path:"session",
                                    component:MovieSession
                                }
                            ]
                        }
                    ]
                },
                {
                    path:"noticias",
                    component:PostList
                },
                {
                    path:":year/:month/:day/:slug",
                    component:Post
                },
                {
                    path:"*",
                    indexRoute: { onEnter: (nextState, replace) => replace(properties.relativeUrl || "/") },
                }
            ]
        }
    }



    render(){
        return(
            <Router history={browserHistory} routes={this.route} />
            // <Route  component={baseApp}>
            //     <IndexRedirect to="home"/>
            //     <Route path="home" component={HomePage} />
            //     <Route path="evento" component={Evento}>
            //         <IndexRoute component={EventListPage}/>
            //         <Route path=":place/:year/:month/:day/:slug" component={EventPage} />
            //         // event list
            //     </Route>
            //     <Route path="cinema">
            //         <IndexRoute component={CinemaList}/>
            //         <Route path=":movie" component={MovieHolder}>
            //             <IndexRedirect to="critica"/>
            //             <Route path="critica" component={Movie} />
            //             <Route path="session" component={MovieSession} />
            //             <Redirect from="*" to="critica" />
            //         </Route>
            //         // <Route path="*" component={CinemaList} />
            //     </Route>
            //     <Route path=":year/:month/:day/:slug" component={Post} />
            //     <Route path="noticias" component={PostList} />
            //     // fallback to home
            //     <Redirect from="*" to="home" />
            // </Route>
            // </Router>
        )
    }
}


render(<App configuration={window.configuration} />, document.getElementById("content"));
