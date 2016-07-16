import dispatcher from 'dispatcher';


export function loadPosts(){
    dispatcher.dispatch({
        type:"SEARCH_POST",
    });
}
