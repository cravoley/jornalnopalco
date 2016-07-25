import { Component } from 'react';
import Event from './eventListItem';

export default class EventList extends Component{

    render(){
        let events = this.props.events.map((event)=>{
            return <Event key={event.id} {...event} />;
        })

        return (
            <div className="list">
                {
                    this.props.loading || events.length > 0 ? <ul className="list-unstyled eventlist">{events}</ul> : "Não foi possível encontrar eventos com o filtro selecionado"
                }
            </div>);
    }
}
