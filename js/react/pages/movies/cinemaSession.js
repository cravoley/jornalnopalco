import { Component } from 'react';
import CinemaTimetable from './cinemaTimetable';


export default class CinemaSession extends Component {
    render(){
        let { timetable } = this.props;
        return (
            <div>
                <h4>{this.props.type}</h4>
                { timetable.length > 0 ? <CinemaTimetable timetable={timetable} /> : <div>Não existem sessões disponíveis</div> }
            </div>
        )
    }
}
