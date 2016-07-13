import baseApp from 'layout/app';
import HomePage from 'pages/home';
import properties from 'stores/propertiesStore';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect } from 'react-router'

import { columnistRoutes, columnistOpenRoutes} from 'routes/columnist';
import contactRoutes from 'routes/contact';
import eventRoutes from 'routes/event';
import galeriesRoutes from 'routes/galeries';
import homeRoutes from 'routes/home';
import movieRoutes from 'routes/movie';
import {newsRoutes, newsOpenRoutes} from 'routes/news';



export default class App extends React.Component{
    constructor(props){
        super(props);
        properties.setConfiguration(props.configuration);
        this.route = {
            path:properties.relativeUrl || "/",
            component:baseApp,
            indexRoute: { component:HomePage },
            childRoutes:[
                homeRoutes,
                eventRoutes,
                movieRoutes,
                newsRoutes,
                newsOpenRoutes,
                contactRoutes,
                galeriesRoutes,
                columnistRoutes,
                columnistOpenRoutes,
                // {
                //     // fallback
                //     path:"*",
                //     indexRoute: { onEnter: (nextState, replace) => replace(properties.relativeUrl || "/") },
                // }
            ]
        }
    }



    render(){
        return(
            <Router history={browserHistory} routes={this.route} />
        )
    }
}


render(<App configuration={window.configuration} />, document.getElementById("content"));
