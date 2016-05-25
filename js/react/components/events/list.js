import List from '../base/listComponent';
import Event from './event.js';
import LoadingComponent from '../generic/loading';

export default class EventList extends List {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[]};
        this.load();
    }

    load(){
        this.loadApi("evento", (err, data)=>{
            console.log("RETORNO", err, data);
            // TODO: handle exception
            if(!err)
                this.setState({list:data.posts, loading:false});
        }, {});
    }

    render(){
        if(this.state.loading == true){
            return <LoadingComponent />
        } else {
            var postList = this.state.list.map((item) => {
                return <Event key={item.id} content={item} navigate={this.props.navigate} />;
            });

            // TODO: adicionar filtro
            if(postList.length > 0){
                return(
                    <div className="row">
                        <div className="col-xs-12">
                            <ul className="list-unstyled eventlist">
                                {postList}
                            </ul>
                        </div>
                    </div>
                );
            } else {
                return <div className="noFound">Nenhum evento encontrado para os termos buscados</div>;
            }
        }
    }
}
