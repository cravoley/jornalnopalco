import dispatcher from '../dispatcher';

export function loadPosts(){
    dispatcher.dispatch({
        type:"LIST_POST_LOAD"
    });
}

export function clear(){

}
