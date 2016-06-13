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

    init({page, post, isSingle, isPage}){
        this.state.page = page;
        this.state.post = post;
        this.state.isSingle = isSingle;
        this.state.isPage = isPage;
    }

    goToPage({page, link, title}){
        this.state.isSingle = false;
        this.state.page = page;
        this._updateProps({link, title});
    }

    goToPost({post, link, title}){
        this.state.isSingle = true;
        this.state.post = post;
        this._updateProps({link, title});
    }

    getPage(){
        return this.state.page;
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

    _updateProps({link, title}){
        if(link){
            History.pushState(this.state, (title || null), link);
        } else {
            // if there ain't a link, force the emit event
            this._emit();
        }
    }

    _emit(){
        this.emit("navigate", this.state);
    }
}
const navigationStore = new NavigationStore();
dispatcher.register(navigationStore.handleEvents.bind(navigationStore));
export default navigationStore;
