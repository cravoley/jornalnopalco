import AjaxComponent from '../base/ajaxComponent';
import LoadingComponent from '../generic/loading'

export default class Post extends AjaxComponent {
    constructor(props){
        super(props);
        this.loadApi('post', (err, items)=>{
            if(!err){
                this.setState({items:items.posts});
            }
        },
        {
            "id":this.props.id
        }
        );
        this.state = {loading:true, type:""};
    }

    getElementByType(){
        console.log(this.state);
    }

    render(){
        var element;
        if(this.state.loading == true){
            element = <LoadingComponent />;
        } else {
            getElementByType();
        }
        return(
            <div>
                {element}
            </div>
        )

    }
}
