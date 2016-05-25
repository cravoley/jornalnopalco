import AjaxComponent from '../base/ajaxComponent';
import Slide from './slide';


export default class Slider extends AjaxComponent {

    constructor(props){
        super(props);
        this.state = {items:[]};
        this.loadApi('cover', (err, items)=>{
            if(!err){
                console.log(items.posts);
                this.setState({items:items.posts});
            }
        });
    }

    render(){
        var slider = this.state.items.map(function(item){
            return (
                <Slide
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    link={item.link}
                    navigate={this.props.navigate}
                    />
            );
        }.bind(this));
        return(
            <div>
                {slider}
            </div>
        );
    }
}
