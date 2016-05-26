import React from 'react';

export default class EventFilterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        // TODO: Buscar locais e filtrar
    }

    render(){
        return (
            <div className="col-xs-4 col-sm-2">
                <h3 className="text-uppercase text-center">Filtrar</h3>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="input-group date datepicker">
                            <input type="text" value={this.state.formatedDate} className="form-control" placeholder="Data" />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                        </div>
                    </div>
                </div>
                    <div className="row filter">
                        <div className="col-xs-12">
                            <h4 className="text-uppercase text-center">Local</h4>
                            <ul>
                                <li><label className="selected" data-place="local_sanitized"><i className="glyphicon glyphicon-remove"><span className="sr-only">remover</span></i> Local Sanitazed</label></li>
                            </ul>
                            <ul>
                                <li><label data-place="local_sanitized"><input type="checkbox" /> Local Sanitazed</label></li>
                            </ul>
                        </div>
                        <div className="col-xs-12  text-center">
                            <input className="btn btn-success update" type="button" value="Filtrar" disabled="disabled" />
                            <input className="btn btn-warning" type="button" value="Limpar" />
                        </div>
                    </div>
            </div>
        )
    }

}
