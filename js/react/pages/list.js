import { Component } from 'react';
import ListComponent from 'components/list';
import Loading from 'components/loading';
import Waypoint from 'react-waypoint';

export default class List extends Component {

    constructor(props){
        super(props);
        this.actions = this.props.actions;
        this.store = this.props.store;


        let { posts, hasMore } = this.getStoreState();
        this.state ={
            posts, hasMore,
            loading:posts.length == 0 ? true : false
        }
    }

    componentWillMount(){
        this.store.on("change", this.handleChange);
        this.store.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        this.store.removeListener("change", this.handleChange);
        this.store.removeListener("loading", this.setLoading);
    }

    getStoreState(){
        return {
            posts:this.store.getPosts(), hasMore:this.store.hasMore()
        }
    }

    handleChange = (props)=>{
        let { posts, hasMore } = this.getStoreState();
        this.setState({loading:false, posts, hasMore});
    }

    setLoading = ()=>{
        this.setState({
            loading:true,
            posts:this.store.getPosts()
        });
    }

    load(){
        setTimeout(()=>{
            this.actions.loadPosts()
        }
        , 0);
    }

    render(){
        console.log(this.state);
        return (
        <div className="row">
            <div className={"col-xs-12"}>
                <ListComponent posts={this.state.posts} loading={this.state.loading} messageEmpty={this.props.messageEmpty}>
                    {this.props.children}
                </ListComponent>
                { this.state.loading && <Loading /> }
                { !this.state.loading && this.state.hasMore && <Waypoint onEnter={this.load.bind(this)} />}
            </div>
        </div>);
    }
}
