import { Component } from 'react';
import PostListItem from './postListItem';


export default class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {posts : props.posts || []};
    }

    componentWillReceiveProps (props){
        this.setState({posts : props.posts || []});
    }

    render(){
        let { posts } = this.state;
        let postList = posts.map((post)=>{
            return (<li key={post.id}>
                <PostListItem {...post} colunista={this.props.colunista} navigate={this.props.navigate} />
            </li>);
        });
        return(
            <div class="col-sm-8 col-xs-12">
            <ul>
                {postList.length > 0 ? postList : "<li>Não existem posts</li>"}
            </ul>
            </div>
        );
    }
}
