import AjaxComponent from './base/ajaxComponent';
import Colunista from './coluna/colunista';
import Event from './events/event';
import Eagora from './eagora/eagora';
import EventFilter from './events/filter';
import InifiteScroll from './infiniteScroll/infiniteScroll';
import LoadingComponent from './generic/loading';
import Post from './post/post';

export default class List extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {filters:{}, clean:false};
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
        this.setState({filters, clean:true});
        // this.loadItems({clean:true, filters});
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
                        // let list;
                        // if(clean)
                        //     list = posts;
                        // else
                        //     list = this.state.list.concat(posts);
                        // this.setState({data:list, loading:false});
                        callback({hasMore:full, data:posts, clean});
                    }
                },
                filters);
    }

    sidebar(){
        if(this.props.type == "evento"){
            return <EventFilter filterCallback={this.filter} />
        }
    }

    hasSidebar(){
        return (this.props.type == "evento");
    }

    getChildren(){
        let { type } = this.props;
        if(type == "evento"){
            return <Event />;
        } else if(type == 'post'){
            return <Post />;
        } else if(type == "colunistas"){
            return <Colunista />;
        } else if(type == "eagora"){
            return <Eagora />;
        }
    }

    render(){
        return(
            <div className="row">
                {this.sidebar()}
                <div className={this.hasSidebar() ? "col-xs-12 col-sm-8" : "col-xs-12" }>
                    <ul className="list-unstyled eventlist">
                        <InifiteScroll
                            clean={this.state.clean}
                            loadData={this.loadItems}
                            additionalProps={{navigate:this.props.navigate}}
                            messageEmpty={`Nenhum ${this.props.type} encontrado para os termos buscados`}>
                            {this.getChildren()}
                        </InifiteScroll>
                    </ul>
                </div>
            </div>
        );
    }
}
