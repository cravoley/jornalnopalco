import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class PostStore extends EventEmitter {
    constructor(){
        super();
        this.posts = [];
    }

    getPost(params){
        let { day, month, year, slug } = params || {};
        console.log("ES", params);
        if(!day || !month || !year || !slug) throw `Unable to find posts using ${params}`;
        if(this.posts.hasOwnProperty(year)){
            if(this.posts[year].hasOwnProperty(month)){
                if(this.posts[year][month].hasOwnProperty(day)){
                    if(this.posts[year][month][day].hasOwnProperty(slug)){
                        return this.emit("change", this.posts[year][month][day][slug]);
                    }
                } else {
                    this.posts[year][month][day] = [];
                }
            } else {
                this.posts[year][month] = [];
                this.posts[year][month][day] = [];
            }
        } else {
            this.posts[year] = [];
            this.posts[year][month] = [];
            this.posts[year][month][day] = [];
        }
        this._loadFromServer({day,month,year,slug});
    }

    _loadFromServer(params){
        this.emit("loading");
        let callback = (err,data) => {
            if(!err){
                let {day,month,year,slug} = params || {};
                this.posts[year][month][day][slug] = data;
            }
            this.emit("change", data);
        }
        let opts = {callback, filter:params};
        api.findPost(opts);
    }

    handleEvents(props){

    }
}
const store = new PostStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
