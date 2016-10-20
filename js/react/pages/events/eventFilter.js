import { Component } from 'react';
import * as actions from 'actions/eventActions';
import Moment from 'moment'
import SelectPlaces from './selectPlaces';

export default class EventFilter extends Component {

	constructor(props) {
		super(props);
		this.filterParams = {selectedDate: null, places: []};
	}

	componentDidMount() {
		$(".datepicker").datepicker(
			{
				format: "dd/mm/yyyy",
				todayBtn: true,
				language: "pt-BR",
				maxViewMode: 2,
				clearBtn: true,
				autoclose: true,
				// multidate:true,
				todayHighlight: true,
			}
		)
			.on('changeDate', function (e) {
				actions.filterByDate({date: e.date || ""});
			}.bind(this));
	}

	clearFilter() {
		actions.clearFilter();
	}

	filterByPlace({place = ""}) {
		actions.filterByPlace({place});
	}

	filterByText(e) {
		let text = e.target.value;
		clearTimeout(this.filterByTextTimeout);
		this.filterByTextTimeout = setTimeout(()=> {
			if (this.props.filter.text != text)
				actions.filterByText(text);
		}, 1000);
	}

	render() {
		let {loading, filter, places = []} = this.props;
		// console.log("Pl", places, this.props);
		let {date} = filter || {};
		let filteredDate;
		if (date)
			filteredDate = Moment(date).format("DD/MM/YYYY")
		return (
			<div className="row">
				<div className="col-xs-12">
					<h3 className="text-uppercase text-center">Filtrar eventos</h3>
					{(filter.text || filter.places.length > 0 || filter.selectedDate) && <button onClick={this.clearFilter}>Limpar filtros</button>}
				</div>
				<div className="col-xs-4">
					<div className="row">
						<div className="col-xs-12">
							<div className="input-group date datepicker">
								<input type="text" value={filteredDate || ""} className="form-control" placeholder="Data" disabled={loading}/>
								<span className="input-group-addon"><i className="glyphicon glyphicon-th"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="row">
						<div className="col-xs-12">
							<div className="input-group text">
								<input type="text" className="form-control" value={filter.text} placeholder="Artista" onKeyDown={this.filterByText.bind(this)} disabled={loading}/>
								<span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xs-4">
					<div className="row filter">
						<SelectPlaces places={places} loading={loading}></SelectPlaces>
					</div>
				</div>
			</div>
		)
	}

}
