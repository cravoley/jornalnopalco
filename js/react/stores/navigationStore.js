import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class NavigationStore extends EventEmitter{
    constructor(){
        super();

        this.state = {post:null, page:null};

        // Bind to StateChange Event
        History.Adapter.bind(window,'statechange',() => { // Note: We are using statechange instead of popstate
            var State = History.getState(); // Note: We are using History.getState() instead of event.state
            this.state = State.data;
            this._emit(State.data);
        });
    }

    goToPage({page, link, title}){
        this._updateProps({page, link, title});
    }

    goToPost({post, link, title}){
        this._updateProps({post, link, title});
    }

    isPage(){
        return this.state.page != null;
    }

    isSingle(){
        return this.state.post != null;
    }

    handleEvents(props){
        let { type } = props || {};
        switch (type) {
            case "NAVIGATE_TO_PAGE":
                this.goToPage(props);
                break;
            case "NAVIGATE_TO_POST":
                this.goToPost(props);
                break;
        }
    }

    _updateProps({page=null, post=null, link, title}){
        this.state = {post,page};
        if(link){
            History.pushState(this.state, (title || null), link);
        } else {
            // if there ain't a link, force the emit event
            this._emit({post, page});
        }
    }

    _emit({post, page}){
        this.emit("navigate", {post, page});
    }
}
const navigationStore = new NavigationStore();
dispatcher.register(navigationStore.handleEvents.bind(navigationStore));
export default navigationStore;
