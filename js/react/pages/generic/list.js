import { Component } from 'react';

export default class GenericList extends Component {


    render(){
        let data;
        if(this.props.posts.length > 0){
            data = this.props.posts.map(
                (data, i) => {
                    return React.Children.map(this.props.children, (children)=> {
                        return React.cloneElement(children, data);
                    });
            });
        } else if(this.props.loading == false){
            data = <div class="empty message">{this.props.messageEmpty}</div>
        }
        return (
            <div>
                {data}
            </div>
        );
    }
}
