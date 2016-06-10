import api from '../api/api';
import dispatcher from '../dispatcher';

export function loadEvents({page=0, filter={}}){
    dispatcher.dispatch({type:"EVENTS_LOADING"});
    let callback = (err,data)=>{
        dispatcher.dispatch({
            type:"EVENTS_LOADED",
            posts:data.posts,
            full:data.full,
            filter
        })
    }
    api.getEvents({page, callback, filter});
}

export function filterEvents({page,filter}){
    dispatcher.dispatch({type:"EVENTS_CLEAN"});
    loadEvents({page,filter});
}
