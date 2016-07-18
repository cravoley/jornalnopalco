import { Component } from 'react';
import { loadColunistInfo } from 'actions/columnistActions'
import store from 'stores/columnistStore';


export default class ColumnistInfo extends Component {

    constructor(props){
        super(props);
        let { name } = props;
        // console.log(props);
        if(name){
            loadColunistInfo(name);
        }
    }



    componentWillMount(){
        store.on("loadedColunistInfo", this.handleChange);
        // postStore.on("loading", this.setLoading);
    }

    componentWillUnmount(){
        // actions.clear();
        store.removeListener("loadedColunistInfo", this.handleChange);
        // postStore.removeListener("loading", this.setLoading);
    }

    handleChange = (info) => {
        console.log(info);
    }


    render(){

        return (
            <div>
                "Informação do colulista"
            </div>
        )
    }
}
