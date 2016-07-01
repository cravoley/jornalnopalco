import { Component } from 'react';
import CinemaTimetable from './cinemaTimetable';


export default class CinemaSession extends Component {
    render(){
        let { timetable } = this.props;
        // { timetable.length > 0 ? <CinemaTimetable timetable={timetable} /> : <div>Não existem sessões disponíveis</div> }
        //
        console.log(this.props);
        return (
            <div>
                <h4>{this.props.time}</h4>
                {this.props.threeD && <span className="threeD">3D</span>}
                {this.props.imax && <span className="imax">IMAX</span>}
                {this.props.XD && <span className="XD">XD</span>}
            </div>
        )
    }
}
