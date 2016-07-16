import dispatcher from '../dispatcher';

export function loadPosts(){
    dispatcher.dispatch({
        type:"MOVIE_LIST_POST_LOAD"
    });
}

export function getPost(params){
    dispatcher.dispatch({
        type:"MOVIE_LOAD",
        payload:params
    });
}
