import EventPage from './pages/eventPage';
import Footer from './layout/footer';
import Header from './layout/header';
import NavigationStore from './stores/navigationStore';
import Post from './components/post';
import properties from './stores/propertiesStore';
import Page from './components/page'
import React from 'react';
import { render } from 'react-dom';
import Slider from './components/slider/slider';


export default class App extends React.Component{
    constructor(props){
        super(props);
        properties.setConfiguration(props.configuration);
        let { id, page } = props.configuration;
        this.state = {post:id, page};
        this.navigate = this.navigate.bind(this);
    }


    componentWillMount(){
        NavigationStore.on("navigate", this.navigate)
    }

    componentWillUnmount(){
        NavigationStore.removeListener("navigate", this.navigate);
    }

    navigate(opts){
        let { post , page } = opts || {};
        this.setState({post,page});
    }

    render(){

        let element;
        if(this.state.isSingle == true){
            element = <Post key={this.state.key} opts={this.state.opts} id={this.state.id} navigate={this.navigate} templateUrl={this.props.configuration.templateUrl} baseUrl={this.props.configuration.baseUrl} />
        } else if(this.state.isPage == true){
            element = <Page key={this.state.page} opts={this.state.opts} page={this.state.page} navigate={this.navigate} baseUrl={this.props.configuration.baseUrl} />
        } else {
            element = <Slider layout="cover" opts={this.state.opts} />
        }
        return(
            <div>
                <Header/>
                <div className="container content">
                    {this.renderContent()}
                </div>
                <Footer navigate={this.navigate}  />
            </div>
        )
    }

    renderContent(){
        let { page, id } = this.state;
        if(page){
            switch (page) {
                case "evento":
                    return <EventPage />
                    break;
                default:

            }
        }
    }
}


render(<App configuration={window.configuration} />, document.getElementById("content"));
