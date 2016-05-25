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
        //
        // this.state = {
        //     text:props.children,
        //     count:0
        // };
        // this.clicka = this.clicka.bind(this);

        // console.log(React);
        //  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
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
            //  <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
            //     <div className="slider" onClick={this.clicka}>
            //         THIS IS A SLIDER!!!!!
            //         {this.state.text}
            //         <div>Clicked {this.state.count} times</div>
            //     </div>
            // </ReactCSSTransitionGroup>
            <div>
                {slider}
            </div>
        );
    }
}
