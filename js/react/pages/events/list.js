import { Component } from 'react';
import eventStore from 'stores/eventStore';
import EventList from './eventList';
import EventFilter from './eventFilter';
import * as actions from 'actions/eventActions';
import Loading from 'components/loading';
import Waypoint from 'react-waypoint';

export default class EventListPage extends Component{
    constructor(){
        super();
        actions.loadEvents({});
        this.state = {
            loading:true,
            events:[],
            hasMore:false,
            places:eventStore.getPlaces(),
            filter:eventStore.filter
        };
    }

    componentWillMount(){
        eventStore.on("change", this.handleChange);
        eventStore.on("loading", this.setLoading);
        eventStore.on("changePlaces", this.handlePlacesChange);
    }

    componentWillUnmount(){
        actions.clear();
        eventStore.removeListener("change", this.handleChange);
        eventStore.removeListener("loading", this.setLoading);
        eventStore.removeListener("changePlaces", this.handlePlacesChange);
    }

    handlePlacesChange = ({places}) => {
        this.setState({places});
    }

    handleChange = (props)=>{
        this.setState({loading:false, events:eventStore.getEvents(), hasMore:eventStore.hasMore()});
    }

    setLoading = ()=>{
        this.setState({
            loading:true,
            events:eventStore.getEvents(),
            filter:eventStore.filter
        });
    }

    load(){
        setTimeout(()=>{
            actions.loadEvents();}
        , 0);
    }

    render(){
        return (
            <div className="row">
                <div className={"col-xs-12"}>
                    <EventFilter places={this.state.places} filter={this.state.filter} loading={this.state.loading } />
                </div>
                <div className={"col-xs-12"}>
                    <EventList events={this.state.events} loading={this.state.loading} />
                    { this.state.loading && <Loading /> }
                    { !this.state.loading && this.state.hasMore && <Waypoint onEnter={this.load.bind(this)} />}
                </div>
            </div>);
    }
}
