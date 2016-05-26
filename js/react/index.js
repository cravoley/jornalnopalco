import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import Post from './components/post';
import Page from './components/page'
import Header from './layout/header';
import Footer from './layout/footer';
import Bootstrap from 'bootstrap';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = props.configuration;
        this.navigate = this.navigate.bind(this);

        window.onpopstate = function (e) {
            if(e.state && e.state.state){
                this.setState(e.state.state);
            };
        }.bind(this);
    }

    navigate(opts){
        let currentState = this.state;
        if(opts.id){
            currentState.id = opts.id;
            currentState.isSingle  = true;
            currentState.isPage  = false;
            currentState.page  = null;
        } else if(opts.page && opts.page != 'home'){
            currentState.id = null;
            currentState.isSingle  = false;
            currentState.page  = opts.page;
            currentState.isPage  = true;
        } else {
            currentState.id = null;
            currentState.isSingle  = false;
            currentState.page  = null;
            currentState.isPage  = false;
        }

        if(opts.link){
            if(typeof window.history.pushState == "function"){
                history.pushState({state:currentState}, null, opts.link);
            } else {
                window.location = opts.link;
            }
        }
        this.setState(currentState);
    }

    render(){
        let element;
        if(this.state.isSingle == true){
            element = <Post id={this.state.id} navigate={this.navigate} />
        } else if(this.state.isPage == true){
            element = <Page page={this.state.page} navigate={this.navigate} />
        } else {
            element = <Slider layout="cover" navigate={this.navigate} />
        }
        return(
            <div>
                <Header navigate={this.navigate} page={this.state.page} templateUrl={this.props.configuration.templateUrl} baseUrl={this.props.configuration.baseUrl}  />
                <div className="container content">
                    {element}
                </div>
                <Footer navigate={this.navigate}  />
            </div>
        )
    }
}


render(<App configuration={configuration} />, document.getElementById("content"));
