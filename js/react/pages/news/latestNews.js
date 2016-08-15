import store from "stores/newsStore";
import LatestList from 'components/latest/latestList';
import { Component } from 'react';


export default class LatestNews extends Component{

    constructor(props){
        super(props);
        let posts = store.latestPost;
        if(posts.length == 0)
            store.loadLatest();
        this.state = {posts, loading:posts.length==0};
    }

    componentWillMount(){
        store.on("loadedLatest", this.handleChange);
        // postStore.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        store.removeListener("loadedLatest", this.handleChange);
        // postStore.removeListener("loading", this.setLoading);
    }

    handleChange = (data) => {
        this.setState({loading:false, posts: store.latestPost});
    }


    render(){
        return (<LatestList posts={this.state.posts} title="Notícias" loading={this.state.loading} current={this.props.current} />);
    }
}
