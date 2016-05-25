import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import Post from './components/post/post';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {id:props.configuration.id, isSingle:props.configuration.isSingle};
    }

    isSingle(){
        return this.props.configuration.isSingle == "true";
    }

    navigate(id){
        console.log(id);
        // this.setState({id:id, isSingle:true});
    }

    render(){
        let element;
        if(this.isSingle()){
            element = <Post id={this.state.id} />
        } else {
            element = <Slider layout="cover" navigate={this.navigate} />
        }
        return element;
    }
}


render(<App configuration={configuration} />, document.getElementById("content"));
