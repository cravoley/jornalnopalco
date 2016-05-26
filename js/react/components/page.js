import AjaxComponent from './base/ajaxComponent';
import List from './list';
import Contact from './form/contact'
import Slider from "./slider/slider";

export default class Page extends AjaxComponent {

    constructor(props){
        super(props);
    }

    render(){
        let page = this.props.page;
        switch (page) {
            case 'evento':
            case 'post':
            case 'eagora':
                return <List navigate={this.props.navigate} type={page} />
                break;
            case 'coluna':
                // TODO
                break;
            case 'contato':
                return <Contact />
                break;
            default:
                return <Slider />

        }
    }
}
