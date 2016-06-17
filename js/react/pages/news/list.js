import { Component } from 'react';
import * as actions from 'actions/postListActions';
import List from 'pages/list';
import ListEntry from './listEntry';
import store from 'stores/postListStore';

export default class NewsList extends Component {

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
