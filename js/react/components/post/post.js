import AjaxComponent from '../base/ajaxComponent';
import LoadingComponent from '../generic/loading';
import PostComponent from './postComponent';

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
        if(post_type == "evento"){
            //TODO
        } else if(post_type == "post"){
            return <PostComponent {...this.state.post} />;
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
