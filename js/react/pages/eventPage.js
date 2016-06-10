import { Component } from 'react';
import eventStore from '../stores/eventStore';
import EventList from './events/eventList';
import * as actions from '../actions/eventActions';
import Loading from '../components/generic/loading';
import Waypoint from 'react-waypoint';

export default class EventPage extends Component{
    constructor(){
        super();
        actions.loadEvents({});
        this.state = {page:0, loading:true, events:[], hasMore:false};
    }

    componentWillMount(){
        eventStore.on("change", this.handleChange);
        eventStore.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        eventStore.removeListener("change", this.handleChange);
        eventStore.removeListener("loading", this.setLoading);
    }

    handleChange = (props)=>{
        this.setState({loading:false, events:eventStore.getEvents(), hasMore:eventStore.hasMore()});
    }

    setLoading = ()=>{
        this.setState({loading:true});
    }

    load(){
        setTimeout(()=>{
            let { page, filter } = this.state;
            page++;
            this.setState({page})
            actions.loadEvents({page,filter});}
        , 1);
    }

    setFilter(){
        let { page, filter } = this.state;
        filter = {"places":["oi"]};
        this.setState({filter});
        actions.filterEvents({page,filter});
    }

    render(){
        return (
            <div className="row">
                <div className={"cols-sm-4 hidden-xs"}>
                    <button onClick={this.setFilter.bind(this)}>OI</button>
                </div>
                <div className={"col-xs-12 col-sm-8"}>
                    <EventList events={this.state.events} loading={this.state.loading} />
                    { this.state.loading && <Loading /> }
                    { !this.state.loading && this.state.hasMore && <Waypoint onEnter={this.load.bind(this)} />}
                </div>
            </div>);
    }
}
