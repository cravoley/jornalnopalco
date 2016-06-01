import AjaxComponent from './base/ajaxComponent';
import ColunistaList from './coluna/listaColunista';
import Contact from './form/contact'
import GaleriesList from './galery/galeriesList';
import List from './list';
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
            case 'colunistas':
            case 'eagora':
                return <List navigate={this.props.navigate} type={this.state.page} opts={this.props.opts} />
                break;
            case 'coluna':
                return <ColunistaList navigate={this.props.navigate} type={this.state.page} opts={this.props.opts} />
            case 'contato':
                return <Contact baseUrl={this.props.baseUrl} />
                break;
            case 'galeria':
                return <GaleriesList navigate={this.props.navigate} type={this.state.page} opts={this.props.opts} />
            default:
                return <Slider navigate={this.props.navigate}  />

        }
    }
}
