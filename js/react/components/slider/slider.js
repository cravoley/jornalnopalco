import AjaxComponent from '../base/ajaxComponent';
import Loading from '../generic/loading';
import Slide from './slide';


export default class Slider extends AjaxComponent {

    constructor(props){
        super(props);
        this.state = {items:[], loading:true};
        this.loadApi('cover', (err, items)=>{
            if(!err){
                clearInterval(this.interval);
                this.interval = setInterval(() => {
                    // let { posts } = items || {};
                    // console.log(posts);
                    // console.log(items);
                    if(items.posts.length > 0){
                        let stateItems = this.state.items;
                        let item = items.posts.shift();
                        stateItems.push(item)
                        // items.posts = posts;
                        this.setState({items:stateItems});
                    } else {
                        clearInterval(this.interval);
                        this.setState({loading:false});
                    }
                }, 500);
            }
        });
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        var slider = this.state.items.map(function(item){
            return (
                <Slide
                    key={item.id}
                    {...item}
                    navigate={this.props.navigate}
                    />
            );
        }.bind(this));
        return(
            <div className="slider">
                {slider}
                {this.state.loading && <Loading />}
            </div>
        );
    }
}
