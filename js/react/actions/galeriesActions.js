import dispatcher from '../dispatcher';

export function loadPosts(){
    dispatcher.dispatch({
        type:"GALERY_LIST_POST_LOAD"
    });
}

export function getPost(params){
    dispatcher.dispatch({
        type:"GALERY_LOAD",
        payload:params
    });
}
