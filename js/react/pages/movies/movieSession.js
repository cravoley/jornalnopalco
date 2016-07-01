import { Component } from 'react';
import Cinema from './cinema';
import Moment from 'moment'

export default class MovieSession extends Component{
    render(){
        let { sessao } = this.props;
        try{
            if(sessao) sessao = JSON.parse(sessao);
        } catch(e){
            console.error("Unable to parse session information", e);
        }
        sessao = sessao.length > 0 ? <ul>{sessao.map((cinema,i) => <Cinema key={i} {...cinema} />)}</ul> : <div>Não estão disponíveis informações sobre sessões de cinema para este filme</div>;


        let date = Moment(this.props.date).format("DD/MM/YYYY");

        return (
            <div>
                <h2>Sessões de exibição</h2>
                {sessao}
                <span>Informações atualizadas em {date}</span>
            </div>
        );
    }
}
