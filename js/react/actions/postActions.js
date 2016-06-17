import dispatcher from '../dispatcher';

export function loadPost(post_type){
    dispatcher.dispatch({
        type:"LIST_LOAD",
        payload: {
            post_type
        }
    });
}

export function clear(){
    
}
