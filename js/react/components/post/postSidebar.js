import React from 'react';
import SidebarItem from './sidebarItem';


export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {posts:[]};
    }


    componentWillReceiveProps(props){
        let { posts } = props;
        this.setState({posts});
    }

    navigate(e){
        e.preventDefault();
        this.props.navigate({id:this.props.id, link:this.props.link});
    }


    render(){
        return(
            <div className="sidebar">
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return (
                                <SidebarItem key={post.id} {...post} navigate={this.props.navigate} currentPost={this.props.currentPost} />
                            );
                        })
                    }
                </ul>
            </div>
        )
    }
}
