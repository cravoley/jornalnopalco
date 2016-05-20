import React from 'react';

export default class Slider extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text:props.children,
            count:0
        };
        this.clicka = this.clicka.bind(this);
    }

    clicka(e){
        console.log(e);
        this.setState({count:++this.state.count});
        // this.state.count = this.state.count+1;
    }

    render(){
        console.log(this.state);
        return(
            <div className="slider" onClick={this.clicka}>
                THIS IS A SLIDER!!!!!
                {this.state.text}
                <div>Clicked {this.state.count} times</div>
            </div>
        );
    }
}
