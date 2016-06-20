import { Component } from 'react';
import Cinema from './cinema';
import Moment from 'moment'

export default class MovieSession extends Component{
    render(){
        let { cinemas } = this.props.movieSessions;
        cinemas = cinemas.length > 0 ? <ul>{cinemas.map((cinema,i) => <Cinema key={i} {...cinema} />)}</ul> : <div>Não estão disponíveis informações sobre sessões de cinema para este filme</div>;


        let date = Moment(this.props.movieSessions.updated).format("DD/MM/YYYY");

        return (
            <div>
                <h2>Sessões de exibição</h2>
                {cinemas}
                <span>Informações atualizadas em {date}</span>
            </div>
        );
    }
}
