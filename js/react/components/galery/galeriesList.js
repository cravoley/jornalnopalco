import AjaxComponent from '../base/ajaxComponent';
import GaleryItem from './galeryItem';
import LoadingComponent from '../generic/loading';

export default class GaleriesList extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], type:props.type};
        this.loadPosts();
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
            var postList = this.state.list.map((item, count) => {
                return <GaleryItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.post_date}
                    image={item.thumb}
                    link={item.link}
                    navigate={this.props.navigate} />
            });
            if(postList.length > 0){
                return postList;
            } else {
                return <div className="noFound">Nenhum {this.state.type} encontrado para os termos buscados</div>;
            }
        }
    }

    render(){
        return(
            <div className="row">
                {this.renderPostList()}
            </div>
        );
    }
}
