import dispatcher from 'dispatcher';


export function getPost(params){
    dispatcher.dispatch({
        type:"EAGORA_LOAD",
        payload:params
    });
}

export function loadPosts(){
    dispatcher.dispatch({
        type:"LIST_EAGORA_LOAD",
    });
}
