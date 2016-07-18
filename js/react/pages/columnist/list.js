import { Component } from 'react';
import * as actions from 'actions/columnistActions';
import ColumnistInfo from './columnistInfo';
import List from 'pages/list';
import ListEntry from './listEntry';

import store from 'stores/columnistStore';

export default class ColumnistList extends Component {

    constructor(props){
        super(props);
        store.setColuminst(props.params.columnist);
    }


    render(){
        return (
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <List actions={actions} store={store} messageEmpty="Não existem colunistas cadastrados">
                        <ListEntry />
                    </List>
                </div>
                <div className="col-sm-4 hidden-xs">
                    <ColumnistInfo name={this.props.params.columnist} />
                </div>
            </div>
        );
    }
}
