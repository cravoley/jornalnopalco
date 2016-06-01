import AjaxComponent from '../base/ajaxComponent';
import LoadingComponent from '../generic/loading';
import PostList from './postList';
import Sidebar from './sidebar';


export default class ListaColunista extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], type:props.type};
        let { colunista } = this.props.opts;
        this.loadPosts({colunista});
    }

    loadPosts(filters){
        this.loadApi(this.state.type, (err, data)=>{
            // TODO: handle exception
            if(err) throw err;
            this.setState({list:data.posts, loading:false});
        }, filters || {});
    }

    renderPostList(){
        let { type, loading } = this.state;
        if(loading == true){
            return <LoadingComponent />
        } else {
            return <PostList colunista={this.props.opts.colunista} posts={this.state.list} navigate={this.props.navigate} />
        }
    }

    render(){

        return(
            <div className="row">
                {this.renderPostList()}
                <Sidebar colunista={this.props.opts.colunista} />
            </div>
        );
    }
}
