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
    }

    navigate(opts){
        console.log(opts.link, opts.page);
        if(opts.link){
            if(typeof history.pushState == "function"){
                history.pushState(null, (opts.title ? opts.title:""), opts.link);
            } else {
                window.location = opts.link;
            }
        }
        console.log(this);
        if(opts.id){
            this.setState({id:opts.id, isSingle:true});
        } else if(opts.page && opts.page != 'home'){
            this.setState({id:null, isSingle:false, page:opts.page, isPage:true})
        } else {
            this.setState({isSingle:false, isPage:false, page:null});
        }
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
        ;
    }
}


render(<App configuration={configuration} />, document.getElementById("content"));
