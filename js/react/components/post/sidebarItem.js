import React from 'react';


export default class SidebarItem extends React.Component{
    constructor(props){
        super(props);
    }


    navigate(e){
        e.preventDefault();
        this.props.navigate({id:this.props.id, link:this.props.link, refresh:true});
    }


    render(){
        return(
            <li class={this.props.id == this.props.currentPost?"currentPost":""}>
                <a onClick={this.navigate.bind(this)} href={this.props.link}>
                    {this.props.title}
                </a>
            </li>
        )
    }
}
