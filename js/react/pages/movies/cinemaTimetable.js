import { Component } from 'react';


export default class CinemaTimetable extends Component {
    render(){
        let timetable = this.props.timetable.map((time,i)=>(
            <li key={i}>
                {time}
            </li>
        ));

        return (
            <ul className="list-unstyled list-inline">
                {timetable}
            </ul>
        )
    }
}
