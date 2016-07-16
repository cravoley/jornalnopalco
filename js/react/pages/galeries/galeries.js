import { Component } from 'react';
import * as actions from 'actions/galeriesActions';
import List from 'pages/list';
import ListEntry from './listItem';
import store from 'stores/galeries';

export default class Galeries extends Component {


    render(){
        return (
            <List actions={actions} store={store} messageEmpty="Não existem galerias cadastradas">
                <ListEntry />
            </List>
        );
    }
}
