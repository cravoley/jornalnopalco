import React from 'react';
import { filterByPlace } from 'actions/eventActions';

export default class EventFilterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {selected:false};
        this.filter = this.filter.bind(this);
    }

    filter(){
        let place = this.props.name_sanitized;
        filterByPlace({place});
    }


    render(){
        return (
            <li>
                <label className={this.props.selected ? 'selected':''} >
                    <input type="checkbox" checked={this.props.selected} onChange={this.filter} disabled={this.props.disabled} /> {this.props.name}
                </label>
            </li>
        );
    }
}
