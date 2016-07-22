import Colunista from './colunista';
import { Component } from 'react';
import * as actions from 'actions/columnistActions';
import store from 'stores/columnistStore';

export default class ColumnistPage extends Component {

    constructor(){
        super();


        let { columninsts } = this.getStoreState();
        this.state = {
            columninsts,
            loading:columninsts.length == 0 ? true : false
        }
    }

    componentWillMount(){
        store.on("change", this.handleChange);
        store.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        store.removeListener("change", this.handleChange);
        store.removeListener("loading", this.setLoading);
    }

    getStoreState(){
        return {
            columninsts:store.getColumnists()
        }
    }

    handleChange = (props) => {
        let { columninsts, hasMore } = this.getStoreState();
        this.setState({loading:false, columninsts});
    }



    setLoading = ()=>{
        this.setState({
            loading:true,
            columninsts:store.getColumnists()
        });
    }


    render(){
        let columnists = this.state.columninsts.map((data, i)=> <Colunista key={i} {...data} />);
        return (
            <div className="colunistas">
                <ul className="list-unstyled">{columnists}</ul>
            </div>
        );
    }
}
