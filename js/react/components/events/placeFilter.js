import React from 'react';

export default class EventFilterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {selected:false};
        this.filter = this.filter.bind(this);
    }

    filter(){
        // if it's selected, it will call upper level function passing remove as true and set selected as false
        this.props.filter({place:this.props.name_sanitized, remove:this.state.selected});
        this.setState({selected:!this.state.selected});
    }


    render(){
        return (
            <li>
                <label className={this.state.selected ? 'selected':''} >
                    <input type="checkbox" onChange={this.filter} /> {this.props.name}
                </label>
            </li>
        );
    }
}
