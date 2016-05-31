import AjaxComponent from './base/ajaxComponent';
import List from './list';
import Contact from './form/contact'
import Slider from "./slider/slider";

export default class Page extends AjaxComponent {

    constructor(props){
        super(props);
        this.state = {page:this.props.page};
    }

    render(){
        let page = this.state.page;
        switch (page) {
            case 'evento':
            case 'post':
            case 'eagora':
                return <List navigate={this.props.navigate} type={this.state.page} />
                break;
            case 'coluna':
                // TODO
                break;
            case 'contato':
                return <Contact baseUrl={this.props.baseUrl} />
                break;
            default:
                return <Slider navigate={this.props.navigate}  />

        }
    }
}
