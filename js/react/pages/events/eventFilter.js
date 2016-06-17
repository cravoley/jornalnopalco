import { Component } from 'react';
import * as actions from 'actions/eventActions';
import eventsStore from 'stores/eventStore';
import Moment from 'moment'
import PlaceFilter from './placeFilter';

export default class EventFilter extends Component {

    constructor(props){
        super(props);
        this.state = {places:eventsStore.getPlaces()};
        this.filterParams = {selectedDate:null, places:[]};
    }

    componentDidMount(){
        $(".datepicker").datepicker(
            {
                format: "dd/mm/yyyy",
    			todayBtn: true,
    			language: "pt-BR",
    			maxViewMode:2,
    			clearBtn:true,
    			autoclose: true,
                // multidate:true,
                todayHighlight:true,
            }
        )
        .on('changeDate', function (e){
            actions.filterByDate({date:e.date || ""});
        }.bind(this));
    }

    clearFilter(){
        actions.clearFilter();
    }

    filterByPlace({place=""}){
        actions.filterByPlace({place});
    }

    filterByText(e){
        let text = e.target.value;
        clearTimeout(this.filterByTextTimeout);
        this.filterByTextTimeout = setTimeout(()=> {
            if(this.props.filter.text != text)
                actions.filterByText(text);
        }, 300);
    }

    render(){
        let { loading, filter } = this.props;
        let places = this.props.places.map(
                (place) => {
                    return <PlaceFilter key={place.id} name={place.place_name} name_sanitized={place.place_name_sanitized} selected={place.selected}  disabled={loading} />
                }
            );
        let { date } = filter || {};
        let filteredDate;
        if(date)
            filteredDate = Moment(date).format("DD/MM/YYYY")
        return (
            <div className="col-xs-4 col-sm-2">
                <h3 className="text-uppercase text-center">Filtrar</h3>
                {(filter.text || filter.places.length > 0 || filter.selectedDate) && <button onClick={this.clearFilter}>Limpar filtros</button>}
                <div className="row">
                    <div className="col-xs-12">
                        <div className="input-group date datepicker">
                            <input type="text" value={filteredDate || ""} className="form-control" placeholder="Data" disabled={loading} />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="input-group text">
                            <input type="text" className="form-control" value={filter.text} placeholder="Artista" onKeyUp={this.filterByText.bind(this)} disabled={loading} />
                            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
                        </div>
                    </div>
                </div>
                <div className="row filter">
                    <div className="col-xs-12">
                        <h4 className="text-uppercase text-center">Local</h4>
                        <ul className="list-unstyled place-filter">
                            {places}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}
