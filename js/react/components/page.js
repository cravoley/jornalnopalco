import AjaxComponent from './base/ajaxComponent';
import EventList from './events/list';
import Contact from './form/contact'

export default class Page extends AjaxComponent {

    constructor(props){
        super(props);
    }

    render(){
        let page = this.props.page;
        if(page == "evento"){
            return <EventList navigate={this.props.navigate} />
        } else if(page == "galeria"){

        } else if(page == "post"){

        } else if(page == "coluna"){

        } else if(page == "eagora"){

        } else if(page == "contato"){
            return <Contact />
        }
    }
}
