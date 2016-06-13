import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class EventStore extends EventEmitter{
    constructor(){
        super();
        this.page = 0;
        this.posts = [];
        this.full = false;
        this.filter = {places:[]};
    }

    append({posts=[], full=false}){
        this.posts = this.posts.concat(posts);
        this.full = full;
    }

    getEvents(){
        return this.posts;
    }

    getPlaces(){
        if(typeof this.places == "undefined"){
            this.places = [];
            let callback = (err,data)=>{
                this.places = data;
                this.emit("changePlaces", {places:data});
            }
            api.getPlaces({callback});
        }
        return this.places;
    }

    hasMore(){
        return this.full;
    }

    loadEvents(props){
        this.emit("loading");
        let callback = (err,data)=>{
            let {posts, full } = data;
            this.append({posts,full});
            this.emit("change");
        }
        let filter = this.filter;
        api.getEvents({page:this.page, callback, filter});
        this.page++;
    }


    reset(){
        this.posts = [];
        this.page = 0;
        this.emit("loading");
    }

    filterByPlace({place}){
        let selected = false;
        if(this.filter.places.indexOf(place) > -1){
            this.filter.places = this.filter.places.filter((item)=> item.toUpperCase() != place.toUpperCase());
        } else {
            this.filter.places.push(place);
            selected = true;
        }

        // add property selected to place object
        this.places.map((item)=>{
            if(item.place_name_sanitized.toUpperCase() == place.toUpperCase())
                item.selected = selected;
            return item;
        });
        this.emit("changePlaces", {places:this.places});
        this.loadEvents();
    }

    cleanFilter(){
        this.reset();
        this.filter = {places:[]};
        this.places.map((item)=>{
            item.selected = false;
            return item;
        });
        this.loadEvents({});
    }

    handleEvents(props){
        let { type } = props || {};
        switch (type) {
            case "EVENTS_LOAD":
                this.loadEvents(props);
                break;
            case "EVENTS_CLEAR_FILTER":
                this.cleanFilter();
                break;
            case "EVENTS_FILTER_DATE":
                this.reset();
                this.filter.selectedDate = props.formatedDate;
                this.filter.date = props.date;
                this.loadEvents();
                break;
            case "EVENTS_FILTER_PLACE":
                this.reset();
                this.filterByPlace(props);
                break;
            case "EVENTS_FILTER_TEXT":
                this.reset();
                this.filter.text = props.text;
                this.loadEvents();
                break;

        }
    }
}
const store = new EventStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
