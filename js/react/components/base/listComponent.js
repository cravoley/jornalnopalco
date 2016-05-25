import React from 'react';
import AjaxComponent from './ajaxComponent';

export default class List extends AjaxComponent{
    constructor(props){
        super(props);
        this.state = {list:props.data || []};
    }
}
