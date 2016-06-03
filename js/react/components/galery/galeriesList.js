import AjaxComponent from '../base/ajaxComponent';
import GaleryItem from './galeryItem';
import LoadingComponent from '../generic/loading';

export default class GaleriesList extends AjaxComponent {
    constructor(props){
        super(props);
        this.state = {loading:true, list:[], tmp:[]};
        this.loadPosts();
    }

    loadPosts(){
        this.loadApi(this.props.type, (err, data)=>{
            // TODO: handle exception
            if(err) throw err;
            this.setState({list:data.posts, loading:false, p:0});

            // TODO: testar isso onde tem muito conteudo
            var interval = setInterval(()=>{
                let p = this.state.p;
                let tmp = this.state.list.slice(0,p);
                p++;
                this.setState({tmp, p});
                if(p >= this.state.list.length){
                    console.log("big");
                    clearInterval(interval);
                }
            }, 500)
        });
    }

    renderPostList(){
        let { loading } = this.state;
        if(loading == true){
            return <LoadingComponent />
        } else {
            var postList = this.state.tmp.map((item, count) => {
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
                return <div className="noFound">Nenhum {this.props.type} encontrado para os termos buscados</div>;
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
