import AjaxComponent from './base/ajaxComponent';
import ColunaPostComponent from './coluna/colunaPostComponent';
import EventComponent from './events/eventComponent';
import LoadingComponent from './generic/loading';
import PostComponent from './post/postComponent';

export default class Post extends AjaxComponent {
    constructor(props){
        super(props);
        this.loadApi('post', (err, item)=>{
            if(!err){
                this.setState({post:item, loading:false});
            }
        },
        {
            "id":this.props.id
        }
        );
        this.state = {loading:true, type:""};
    }

    getElementByType(post_type){
        if("evento" == post_type){
            return <EventComponent {...this.state.post} />;
        } else if("post" == post_type){
            return <PostComponent {...this.state.post} />;
        } else if("coluna" == post_type){
            return <ColunaPostComponent {...this.state.post} colunista={this.props.opts.colunista} />;
        }

    }

    render(){
        var element;
        if(this.state.loading == true){
            element = <LoadingComponent />;
        } else {
            element = this.getElementByType(this.state.post.post_type);
        }

        return(
            <div>
                {element}
            </div>
        )
    }
}
