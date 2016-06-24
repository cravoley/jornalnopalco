import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class GaleriesStore extends EventEmitter {
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

    // search for a single post
    getPost(params){
        let { day, month, year, slug } = params || {};
        if(!day || !month || !year || !slug) throw `Unable to find posts using ${params}`;
        // if(this.posts.hasOwnProperty(year)){
        //     if(this.posts[year].hasOwnProperty(month)){
        //         if(this.posts[year][month].hasOwnProperty(day)){
        //             if(this.posts[year][month][day].hasOwnProperty(slug)){
        //                 return this.posts[year][month][day][slug];
        //             }
        //         } else {
        //             this.posts[year][month][day] = [];
        //         }
        //     } else {
        //         this.posts[year][month] = [];
        //         this.posts[year][month][day] = [];
        //     }
        // } else {
        //     this.posts[year] = [];
        //     this.posts[year][month] = [];
        //     this.posts[year][month][day] = [];
        // }
        return this._loadFromServer({day,month,year,slug, post_type:'galeria'});
    }

    // search and load single post from server
    _loadFromServer(params){
        this.emit("loading");
        let callback = (err,data) => {
            // if(!err){
            //     let {day,month,year,slug} = params || {};
            //     this.posts[year][month][day][slug] = data;
            // }
            this.emit("change", data);
        }
        let opts = {callback, filter:params};
        return api.findPost(opts);
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
        api.getPosts({page:this.postList.page, callback, post_type:"galeria"});
        this.postList.page++;
    }




    reset(){
        this.postList.posts = [];
        this.postList.page = 0;
        this.emit("loading");
    }

    handleEvents(props){
        switch(props.type){
            case "GALERY_LOAD":
                this.reset();
                this.emit("loading")
                this.getPost(props.payload);
                break;
            case "GALERY_LIST_POST_LOAD":
                // this.reset();
                this.loadPosts();
                break;
        }
    }
}
const store = new GaleriesStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
