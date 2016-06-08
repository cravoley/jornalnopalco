import AjaxComponent from './base/ajaxComponent';
import ColunaPostComponent from './coluna/colunaPostComponent';
import EventComponent from './events/eventComponent';
import EagoraComponent from './eagora/eagoraComponent';
import GaleryPostComponent from './galery/galeryPostComponent';
import LoadingComponent from './generic/loading';
import PostComponent from './post/postComponent';

export default class Post extends AjaxComponent {
    constructor(props){
        super(props);
        this.loadApi(`post/post/${this.props.id}`, (err, item)=> {
                if(!err){
                    this.setState({post:item, loading:false});
                }
            }
        );
        this.state = {loading:true, type:""};
    }

    getElementByType(post_type){
        if("evento" == post_type){
            return <EventComponent {...this.state.post} />;
        } else if("post" == post_type){
            return <PostComponent {...this.state.post} navigate={this.props.navigate} />;
        } else if("coluna" == post_type){
            return <ColunaPostComponent {...this.state.post} colunista={this.props.opts.colunista} />;
        } else if("galeria" == post_type){
            return <GaleryPostComponent {...this.state.post} />
        } else if("eagora" == post_type){
            return <EagoraComponent {...this.state.post} templateUrl={this.props.templateUrl} />
        }
    }

    render(){
        var element;
        if(this.state.loading == true){
            element = <LoadingComponent />;
        } else {
            element = this.getElementByType(this.state.post.post_type);
        }

        return (
            <div class={this.state.post?this.state.post.post_type:""}>
            {element}
            </div>
        );
    }
}
