import { Component } from 'react';
import * as actions from '../../actions/postListActions';
import List from '../list';
import ListEntry from './listEntry';
import store from '../../stores/postListStore';

export default class PostList extends Component {

    constructor(){
        super();
    }


    render(){
        return (
            <List actions={actions} store={store} messageEmpty="Não existem noticias">
                <ListEntry />
            </List>
        );
    }
}
