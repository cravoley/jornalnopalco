import api from '../api/api';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';


class ColumnistStore extends EventEmitter {
	constructor() {
		super();
		this.post_type = 'coluna';
		this.posts = [];
		this.postList = {
			posts: [],
			full: false,
			page: 0,
			initial: true
		};
		this.columnists = [];
		// this.loadLatest();
	}

	// search for a single post
	getPost(params) {
		let { day, month, year, slug } = params || {};
		if (!day || !month || !year || !slug) throw `Unable to find posts using ${params}`;
		return this._loadFromServer({day, month, year, slug, post_type: this.post_type});
	}

	// search and load single post from server
	_loadFromServer(params) {
		this.emit("loading");
		let callback = (err, data) => {
			// if(!err){
			//     let {day,month,year,slug} = params || {};
			//     this.posts[year][month][day][slug] = data;
			// }
			this.emit("change", data);
		}
		let opts = {callback, filter: params};
		return api.findPost(opts);
	}


	append({posts=[], full=false}) {
		// console.log(this.postList)
		this.postList.posts = this.postList.posts.concat(posts);
		this.postList.full = full;
	}

	hasMore() {
		return this.postList.full;
	}

	getPosts() {
		if (this.postList.initial) {
			this.postList.initial = false;
			this.loadPosts();
		}
		return this.postList.posts;
	}

	// get posts for listing
	loadPosts() {
		this.emit("loading");
		let callback = (err, data)=> {
			let {posts, full } = data;
			this.append({posts, full});
			this.emit("change");
		}
		let filter = {};
		if (this.columninst) {
			filter = {columninst: this.columninst};
		}
		api.getPosts({page: this.postList.page, callback, post_type: this.post_type, filter});
		this.postList.page++;
	}

	setColuminst(slug) {
		this.reset();
		this.columninst = slug;
		this.loadPosts();
	}


	reset() {
		this.postList.posts = [];
		this.postList.page = 0;
		this.emit("loading");
	}

	getColumnists() {
		if (this.columnists.length == 0) {
			this.emit("loading");
			let callback = (err, data)=> {
				let {posts, full } = data;
				// console.log(data);
				this.columnists = data.posts;
				// this.append({posts,full});
				this.emit("change");
			}
			api.getColumnists({callback});
		}
		return this.columnists;
	}

	loadColunistInfo(columnist) {
		if (!columnist) return;

		// this.emit("loadingColunistInfo");
		let callback = (err, data) => {
			this.emit("loadedColunistInfo", data);
		}
		api.loadColunistInfo(columnist, callback);
	}

	handleEvents(props) {
		switch (props.type) {
			case "COLUMN_POST_LOAD":
				this.emit("loading")
				this.getPost(props.payload);
				break;
			case "COLUMN_LIST_POST_LOAD":
				// this.reset();
				this.loadPosts();
				break;
			case "COLUMN_AUTHOR_LOAD":
				this.loadColunistInfo(props.payload);
				break;
		}
	}
}
const store = new ColumnistStore();
dispatcher.register(store.handleEvents.bind(store));
export default store;
