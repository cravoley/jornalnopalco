import dispatcher from 'dispatcher';


export function getPost(params){
    dispatcher.dispatch({
        type:"POST_LOAD",
        payload:params
    });
}

export function loadPosts(){
    dispatcher.dispatch({
        type:"LIST_POST_LOAD",
    });
}
