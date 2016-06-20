import { Component } from 'react';
import CinemaSession from './cinemaSession';

export default class Cinema extends Component {
    render(){

        let showTimes =
        (this.props.showTimes.length > 0)
            ?   <ul>{this.props.showTimes.map((showTime,i)=><CinemaSession key={i} {...showTime} />)}</ul>
            :   <div>Nenhuma sessão definida para este cinema</div>;

        return (
            <div>
                <h3>{this.props.name}</h3>
                { showTimes }
            </div>
        )
    }
}
