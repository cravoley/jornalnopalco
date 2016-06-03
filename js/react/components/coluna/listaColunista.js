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

    // used by InifiteScroll
    loadItems = (
        {
            callback=()=>{return;},
            page=0
        }) => {
            this.loadApi(`${this.props.type}/${this.props.opts.colunista}/${page}`, (err, data)=>{
                    let { full=false, posts=[] } = data || {};
                    if(!err){
                        // let list= this.state.list.concat(posts);
                        // this.setState({list, loading:false});
                        callback({hasMore:full, data:posts});
                    }
                });
    }

    render(){

        return(
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <InifiteScroll loadData={this.loadItems} additionalProps={{navigate:this.props.navigate}}>
                        <PostListItem />
                    </InifiteScroll>
                </div>
                <Sidebar colunista={this.props.opts.colunista} />
            </div>
        );
    }
}
