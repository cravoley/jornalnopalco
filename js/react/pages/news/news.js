import { Component } from 'react';
import Article from './article';
import * as actions from 'actions/newsActions';
import postStore from 'stores/newsStore';
import Loading from 'components/loading';



export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {loading:true, post:{}};
        actions.getPost(this.props.params);

    }

    componentWillMount(){
        postStore.on("change", this.handleChange);
        // postStore.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        postStore.removeListener("change", this.handleChange);
        // postStore.removeListener("loading", this.setLoading);
    }



    handleChange = (props)=>{
        // let { posts, hasMore } = this.getStoreState();
        this.setState({loading:false, post:props});
    }


    render(){
        // var element;
        // if(this.state.loading == true){
        //     element = <LoadingComponent />;
        // } else {
        //     element = this.getElementByType(this.state.post.post_type);
        // }
        return (
            <div >
                {this.state.loading && <Loading />}
                {!this.state.loading && <Article {...this.state.post} />}
            </div>
        );
    }
}
