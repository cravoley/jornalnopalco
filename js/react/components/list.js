import List from './base/listComponent';
import Post from './post/post';
import Event from './events/event';
import EventFilter from './events/filter';
import LoadingComponent from './generic/loading';

export default class EventList extends List {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], type:props.type};
        this.loadPosts();
        this.filter = this.filter.bind(this);
    }

    loadPosts(filters){
        this.loadApi(this.state.type, (err, data)=>{
            // TODO: handle exception
            if(err) throw err;
            this.setState({list:data.posts, loading:false});
        }, filters || {});
    }

    filter(filters){
        this.setState({loading:true});
        this.loadPosts(filters);
    }

    renderPostList(){
        if(this.state.loading == true){
            return <LoadingComponent />
        } else {
            var postList = this.state.list.map((item) => {
                if(this.state.type == "evento"){
                    return <Event key={item.id} content={item} navigate={this.props.navigate} />;
                } else if(this.state.type == 'post'){
                    return <Post key={item.id} content={item} navigate={this.props.navigate} />;
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
        if(this.state.type == "evento"){
            return <EventFilter filterCallback={this.filter} />
        }
    }

    hasSidebar(){
        return (this.state.type == "evento");
    }

    render(){

        return(
            <div className="row">
                {this.sidebar()}
                <div className={this.hasSidebar() ? "col-xs-12 col-sm-8" : "col-xs-12" }>
                    {this.renderPostList()}
                </div>
            </div>
        );
    }
}
