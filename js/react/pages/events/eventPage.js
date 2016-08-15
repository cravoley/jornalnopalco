import { Component } from 'react';
import Event from './event';
import Loading from 'components/loading';
import * as actions from 'actions/eventActions';
import store from 'stores/eventStore';


export default class EventPage extends Component{
    constructor(props){
        super(props);
        this.state = {loading:true, post:{}};
        actions.getPost(props.params);
    }

    componentWillMount(){
        store.on("change", this.handleChange);
        // postStore.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        store.removeListener("change", this.handleChange);
        // postStore.removeListener("loading", this.setLoading);
    }




    handleChange = (props)=>{
        // let { posts, hasMore } = this.getStoreState();
        this.setState({loading:false, post:props});
    }


    componentWillReceiveProps(props){
        this.setState({loading:true});
        actions.getPost(props.params);
    }

    render(){
        let { loading, post } = this.state;
        return (
            <div>
                {loading && <Loading />}
                {!loading && <Event {...post} />}
            </div>
        );
    }

}
