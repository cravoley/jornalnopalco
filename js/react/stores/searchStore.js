import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class SearchStore extends EventEmitter {
    constructor(){
        super();
        this.posts = [];
        this.postList = {
            posts:[],
            full:false,
            page:0,
            initial:true
        };
    }

    setQuery(query){
        this.query = query;
        this.postList = {
            posts:[],
            full:false,
            page:0,
            initial:true
        }
    }

    append({posts=[], full=false}){
        this.postList.posts = this.postList.posts.concat(posts);
        this.postList.full = full;
    }

    hasMore(){
        return this.postList.full;
    }

    getPosts(){
        if(this.postList.initial){
            this.postList.initial = false;
            this.loadPosts();
        }
        return this.postList.posts;
    }

    // get posts for listing
    loadPosts(){
        this.emit("loading");
        let callback = (err,data)=>{
            let {posts, full } = data;
            this.append({posts,full});
            this.emit("change");
        }
        let filter = this.query ? {query:this.query} : {};
        api.searchPosts({page:this.postList.page, callback, filter});
        this.postList.page++;
    }

    reset(){
        this.postList.posts = [];
        this.postList.page = 0;
        this.emit("loading");
    }

    handleEvents(props){
        switch(props.type){
            case "SEARCH_POST":
                // this.reset();
                this.loadPosts();
                break;
        }
    }
}
const store = new SearchStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
