import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';
import Post from './components/post';
import Page from './components/page'
import Header from './layout/header';
import Footer from './layout/footer';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = props.configuration;
        this.navigate = this.navigate.bind(this);

        // Bind to StateChange Event
        History.Adapter.bind(window,'statechange',() => { // Note: We are using statechange instead of popstate
            var State = History.getState(); // Note: We are using History.getState() instead of event.state
            this.setState(State.data);
        });
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
            History.pushState(currentState, (opts.title || null), opts.link);
        }
        this.setState(currentState);
    }

    render(){
        let element;
        if(this.state.isSingle == true){
            element = <Post key={this.state.id} id={this.state.id} navigate={this.navigate} baseUrl={this.props.configuration.baseUrl} />
        } else if(this.state.isPage == true){
            element = <Page key={this.state.page} page={this.state.page} navigate={this.navigate} baseUrl={this.props.configuration.baseUrl} />
        } else {
            element = <Slider layout="cover" navigate={this.navigate} baseUrl={this.props.configuration.baseUrl} />
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
