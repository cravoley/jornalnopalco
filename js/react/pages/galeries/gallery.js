import { Component } from 'react';
import * as actions from 'actions/galeriesActions';
import Image from './image';
import Loading from 'components/loading';
import store from 'stores/galeries';

export default class Gallery extends Component {

    constructor(props){
        super(props);
        this.state ={loading:true, post:{}};
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
        this.setState({loading:false, post:props||{}});
    }

    render(){
        let pics = this.state.post.pics?this.state.post.pics.map((pic) => <Image key={pic.id} {...pic} />):"";
        return (
            <div className="row">
                <div className="col-xs-12">
                    <h1>{this.state.post.title}</h1>
                    {pics}
                </div>
                <div className="clearfix"></div>
                { this.state.loading && <Loading />}
            </div>
        );
    }
}
