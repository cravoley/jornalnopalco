import React from 'react';


// TODO: ajustar layout
export default class LoadingComponent extends React.Component{
    render(){
        return (
            <div className="loading">
                <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                <span>Carregando...</span>
            </div>
        )
    }
}
