import React from 'react';


export default class NavigableComponent extends React.Component{

    constructor(props){
        super(props);
        this.navigate = this.navigate.bind(this);
    }

    navigate(){
        // call function set as opts on index.js
        if(typeof this.props.navigate == "function"){
            this.props.navigate(this.props);
        }
    }

}
