import List from './base/listComponent';
import Event from './events/event.js';
import LoadingComponent from './generic/loading';

export default class EventList extends List {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], type:"evento"};
        this.load();
    }

    load(){
        this.loadApi(this.state.type, (err, data)=>{
            // TODO: handle exception
            if(err) throw err;
            this.setState({list:data.posts, loading:false});
        }, {});
    }

    renderPostList(){
        var postList = this.state.list.map((item) => {
            if(this.state.type == "evento"){
                return <Event key={item.id} content={item} navigate={this.props.navigate} />;
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

    render(){
        if(this.state.loading == true){
            return <LoadingComponent />
        } else {
            return(
                <div className="row">
                    <div className="col-xs-12 col-sm-8">
                        {this.renderPostList()}
                    </div>
                </div>
            );
        }
    }
}
