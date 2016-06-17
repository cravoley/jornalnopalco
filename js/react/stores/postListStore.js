import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class PostListStore extends EventEmitter {
    constructor(){
        super();
        this.posts = [];
        this.full = false;
        this.page=0;
        // load initial posts
        // TODO: remove this from constructor
        this.loadPosts();
    }

    append({posts=[], full=false}){
        this.posts = this.posts.concat(posts);
        this.full = full;
    }

    getPosts(){
        return this.posts;
    }

    hasMore(){
        return this.full;
    }

    loadPosts(){
        this.emit("loading");
        let callback = (err,data)=>{
            let {posts, full } = data;
            this.append({posts,full});
            this.emit("change");
        }
        api.getPosts({page:this.page, callback, post_type:"post"});
        this.page++;
    }


    reset(){
        this.posts = [];
        this.page = 0;
        this.emit("loading");
    }

    handleEvents(props){
        let { type } = props || {};
        switch (type) {
            case "LIST_POST_LOAD":
                this.loadPosts();
                break;
            case "LIST_CLEAR":
                this.reset();
                break;

        }
    }
}
const store = new PostListStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
