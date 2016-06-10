import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class EventStore extends EventEmitter{
    constructor(){
        super();
        this.posts = [];
        this.full = false;
    }

    apppend({posts=[], full=false}){
        this.posts = this.posts.concat(posts);
        this.full = full;
    }

    getEvents(){
        return this.posts;
    }

    hasMore(){
        return this.full;
    }

    handleEvents(props){
        let { type } = props || {};
        switch (type) {
            case "EVENTS_LOADING":
                this.emit("loading");
                break;
            case "EVENTS_CLEAN":
                this.posts = [];
                this.emit("change");
                break;
            case "EVENTS_LOADED":
                let { posts, full, filter } = props;
                this.apppend({posts, full});
                this.emit("change");
                break;
        }
    }
}
const store = new EventStore();
const registerId = dispatcher.register(store.handleEvents.bind(store));
export function getRegisterId(){
    return registerId;
}
export default store;
