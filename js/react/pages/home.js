import store from 'stores/newsStore';
import Post from 'components/home/postDisplay';
import Slider from 'components/home/slider';
import { Component } from 'react';

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            latestPost:[],
            coverPosts:[]
        };
    }

//loadedLatest

    componentWillMount(){
        store.loadLatest();
        store.loadCover();
        store.on("loadedLatest", this.handleChange);
        store.on("coverLoaded", this.handleCoverChange);
    }

    componentWillUnmount(){
        // actions.clear();
        store.removeListener("loadedLatest", this.handleChange);
        store.removeListener("coverLoaded", this.handleCoverChange);
    }



    handleChange = (props)=>{
        // let { posts, hasMore } = this.getStoreState();
        this.setState({latestPost:store.latestPost});
    }

    handleCoverChange = (props) => {
        this.setState({coverPosts:store.coverPosts});
    }

    render(){
        let hasLatest = this.state.latestPost.length > 0;
        let hasCover = this.state.coverPosts.length > 0;
        let coverPosts = this.state.coverPosts.map((post,index)=>{
            // first one is bigger
            return <Post key={post.id} {...post} layout={(index == 0 ? "big" : "small" )} />
        });
        return (
            <div className="cover">
                { hasLatest && <div className="row"><Slider posts={this.state.latestPost} /></div> }
                { coverPosts.length > 0 && <div className="row">{coverPosts}</div>}
            </div>
        );
    }
}
