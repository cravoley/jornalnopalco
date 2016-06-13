import { Component } from 'react';
import EventListPage from './eventListPage';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class EventPage extends Component {


    render(){
        return (
            <Route path="/" component={EventListPage}>
            </Route>
            );
    }
}
