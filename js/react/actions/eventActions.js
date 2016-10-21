
import dispatcher from '../dispatcher';

export function loadEvents(){
    dispatcher.dispatch({type:"EVENTS_LOAD"});
}

export function clearFilter(){
    dispatcher.dispatch({type:"EVENTS_CLEAR_FILTER"});
}

export function clear(){
    dispatcher.dispatch({type:"EVENTS_CLEAR"});
}

export function filterByDate({date}){
    let formatedDate;
    if(date != ""){
        if(!(date instanceof Date)){
            formatedDate = new Date(date);
        }
        formatedDate = date.getFullYear() + ("0"+(parseInt(date.getMonth())+1)).slice(-2) + ("0"+date.getDate()).slice(-2);
        formatedDate = formatedDate;
    }
    dispatcher.dispatch({
        type:"EVENTS_FILTER_DATE",
        date,
        formatedDate
    });
}

export function filterByPlace({place=""}){
    dispatcher.dispatch({
        type:"EVENTS_FILTER_PLACE",
        place,
    });
}



export function filterByPlaces({places=[]}){
    dispatcher.dispatch({
        type:"EVENTS_FILTER_PLACES",
        places,
    });
}


export function filterByText(text){
    dispatcher.dispatch({
        type:"EVENTS_FILTER_TEXT",
        text,
    });
}


export function getPost(params){
    dispatcher.dispatch({
        type:"EVENT_LOAD",
        payload:params
    });
}
