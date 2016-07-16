import { Component } from 'react';
import Header from './header';
import Footer from './footer';

export default class App extends Component {

    render(){
        return (
            <div>
                <Header {...this.props} />
                <div className="container content">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}
