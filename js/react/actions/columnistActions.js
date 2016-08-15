import dispatcher from 'dispatcher';


export function getPost(params){
    dispatcher.dispatch({
        type:"COLUMN_POST_LOAD",
        payload:params
    });
}

export function loadPosts(){
    dispatcher.dispatch({
        type:"COLUMN_LIST_POST_LOAD",
    });
}

export function loadColunistInfo(params){
    dispatcher.dispatch({
        type:"COLUMN_AUTHOR_LOAD",
        payload:params
    });
}
