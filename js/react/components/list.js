import AjaxComponent from './base/ajaxComponent';
import Colunista from './coluna/colunista';
import Event from './events/event';
import EventFilter from './events/filter';
import InifiteScroll from './infiniteScroll/infiniteScroll';
import LoadingComponent from './generic/loading';
import Post from './post/post';

export default class List extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {list:[], loading:true, filters:{}};
        // this.loadPosts();
        this.filter = this.filter.bind(this);
    }

    // loadPosts(filters){
    //     this.loadApi(this.state.type, (err, data)=>{
    //         // TODO: handle exception
    //         if(err) throw err;
    //         this.setState({list:data.posts, loading:false});
    //     }, filters || {});
    // }

    filter(filters){
        this.setState({filters, loading:true});
        this.loadItems({clean:true, filters});
    }



    loadItems = (
        {
            callback=()=>{return;},
            page=0,
            clean=false,
            filters=this.state.filters
        }) => {
            this.loadApi(`${this.props.type}/page/${page}`,
                (err, data)=> {
                    let { full=false, posts=[] } = data || {};
                    if(!err){
                        let list;
                        if(clean)
                            list = posts;
                        else
                            list = this.state.list.concat(posts);
                        this.setState({list, loading:false});
                        callback({hasMore:full});
                    }
                },
                filters);
    }



    renderPostList(){
        let { type, navigate } = this.props;
        let { loading, list } = this.state;
        if(loading == true){
            return;
        } else {
            var postList = list.map((item) => {
                if(type == "evento"){
                    return <Event key={item.id} content={item} navigate={navigate} />;
                } else if(type == 'post'){
                    return <Post key={item.id} content={item} navigate={navigate} />;
                } else if(type == "colunistas"){
                    return <Colunista key={item.id} content={item} navigate={navigate} />;
                }
                // TODO: outros tipos de posts
            });
            if(postList.length > 0){
                return (
                    <ul className="list-unstyled eventlist">
                        {postList}
                    </ul>
                );
            } else {
                return <div className="noFound">Nenhum {this.state.type} encontrado para os termos buscados</div>;
            }
        }
    }

    sidebar(){
        if(this.props.type == "evento"){
            return <EventFilter filterCallback={this.filter} />
        }
    }

    hasSidebar(){
        return (this.props.type == "evento");
    }

    render(){

        return(
            <div className="row">
                {this.sidebar()}
                <div className={this.hasSidebar() ? "col-xs-12 col-sm-8" : "col-xs-12" }>
                    <InifiteScroll loadItemCallback={this.loadItems} loading={this.state.loading} page={0}>
                        {this.renderPostList()}
                    </InifiteScroll>
                </div>
            </div>
        );
    }
}
