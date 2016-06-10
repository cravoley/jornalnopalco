import dispatcher from '../dispatcher';

export function goToPage({page,title,link}){
    dispatcher.dispatch({
        type:"NAVIGATE_TO_PAGE",
        page,
        title,
        link
    });
}

export function goToPost({post,title,link}){
    dispatcher.dispatch({
        type:"NAVIGATE_TO_POST",
        post,
        title,
        link
    });
}
