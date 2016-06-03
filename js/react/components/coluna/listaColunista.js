import AjaxComponent from '../base/ajaxComponent';
import InifiteScroll from '../infiniteScroll/infiniteScroll';
import LoadingComponent from '../generic/loading';
import PostListItem from './postListItem';
import Sidebar from './sidebar';


export default class ListaColunista extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[]};
    }

    loadItems = (
        {
            callback=()=>{return;},
            page=0
        }) => {
            this.loadApi(`${this.props.type}/${this.props.opts.colunista}/${page}`, (err, data)=>{
                    let { full=false, posts=[] } = data || {};
                    if(!err){
                        let list= this.state.list.concat(posts);
                        this.setState({list, loading:false});
                        callback({hasMore:full});
                    }
                });
    }

    renderPostList(){
        let { type, loading, list } = this.state;
        if(loading == true){
            return;
        } else {
            let postList = list.map((post)=>{
                return (<li key={post.id}>
                    <PostListItem {...post} colunista={this.props.opts.colunista} navigate={this.props.navigate} />
                </li>);
            });
            return <div class="col-sm-8 col-xs-12">
                <ul>
                    {postList.length > 0 ? postList : <li>Não existem posts</li>}
                </ul>
            </div>
        }
    }

    render(){

        return(
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <InifiteScroll loadItemCallback={this.loadItems} page={0}>
                        {this.renderPostList()}
                    </InifiteScroll>
                </div>
                <Sidebar colunista={this.props.opts.colunista} />
            </div>
        );
    }
}
