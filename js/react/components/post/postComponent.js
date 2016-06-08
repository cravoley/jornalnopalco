import Api from '../api/api'
import Article from './article'
import Loading from '../generic/loading';
import PostSidebar from './postSidebar';
import React from 'react';
import Waypoint from 'react-waypoint';


export default class PostComponent extends React.Component{
    constructor(props){
        super(props);
        let posts = [];
        posts.push(props);
        this.state = {relatedPosts:[],currentPost:props.id, posts, loading:false};
        // store posts which have been rendered
        this.loadedPosts = [];


        Api.getPosts({
            callback:this._loadRelatedCallback.bind(this),
            filter:{older:this.props.id}
        })
    }


    loadNextPost(props){
        let { currentPosition, previousPosition, id} = props;
        if(currentPosition == Waypoint.inside && previousPosition != null){
            if(previousPosition == Waypoint.below){
                // search for next post
                let nextPost, foundCurrentPost;
                this.state.relatedPosts.some(item=>{
                    if(item.id == id){
                        foundCurrentPost = true;
                    } else if(foundCurrentPost){
                        nextPost = item.id;
                        return true;
                    }
                });
                // there is a preloaded post. Load all content
                if(nextPost){
                    if(this.loadedPosts.indexOf(nextPost) == -1){
                        this.setState({loading:true})
                        this.loadedPosts.push(nextPost);
                        Api.getPost({id:nextPost, callback:(err, post)=>{
                            let posts = this.state.posts;
                            posts.push(post);
                            this.setState({posts, loading:false});
                            this._updateCurrentPost(post);
                        }})
                    } else {
                        this._updateCurrentPost({id:nextPost});
                    }
                }
            } else {
                this._updateCurrentPost({id});
            }
        }
    }

    render(){
        return(
            <div class="row">
                <div class="col-sm-8 col-xs-12">
                    {
                        this.state.posts.map((post)=>{
                            return <Article key={post.id} {...post} loadNextPost={this.loadNextPost.bind(this)} />
                        })
                    }
                    {this.state.loading && <Loading />}
                </div>
                <div class="hidden-xs col-sm-4">
                    <PostSidebar posts={this.state.relatedPosts} navigate={this.props.navigate} currentPost={this.state.currentPost} />
                </div>
            </div>
        )
    }

    _updateCurrentPost(post){
        let { id } = post;
        this.setState({currentPost:id});
        let loadedPost = this.state.posts.filter(post=>post.id == id);
        if(loadedPost.length == 1){
            let currentPost = loadedPost[0];
            let { id, link } = currentPost;
            this.props.navigate({id, link, redirect:false});
        } else throw "Unable to found the right post to navigate to";
    }

    _loadRelatedCallback(err,data){
        if(!err){
            let { posts } = data || {};
            this.setState({relatedPosts:posts});
        }
    }
}
