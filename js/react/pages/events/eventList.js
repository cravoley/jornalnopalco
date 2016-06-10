import { Component } from 'react';
import Event from './eventListItem';

export default class EventList extends Component{

    render(){
        let events = this.props.events.map((event)=>{
            return <Event key={event.id} {...event} />;
        })

        return (
            <div>
                {
                    this.props.loading || events.length > 0 ? events : "Não foi possível encontrar eventos com o filtro selecionado"
                }
            </div>);
    }
}
