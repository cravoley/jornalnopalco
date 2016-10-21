import { Component } from 'react';
import PlaceFilter from './placeFilter';
import eventStore from 'stores/eventStore';
import SelectedPlace from './selectedPlace';
import { filterByPlaces } from 'actions/eventActions';

export default class SelectPlaces extends Component {

	constructor(props) {
		super(props);
		this.state = {selectPlace: false, places: []};

	}

	componentWillMount() {
		eventStore.on("clearFilter", this.clearFilters);
	}

	componentWillUnmount() {
		eventStore.removeListener("clearFilter", this.clearFilters);
	}

	clearFilters = ()=> {
		this.setState({selectPlace: false, places: []});
	}

	toogleSelectPlace = ()=> {
		if (this.state.selectPlace) {
			filterByPlaces({places: this.state.places || []});
		}
		this.setState({selectPlace: !this.state.selectPlace});
	};

	filter = (place) => {
		if (this.state.places.indexOf(place) > -1) {
			this.state.places = this.state.places.filter((item)=> item.toUpperCase() != place.toUpperCase());
		} else {
			this.state.places.push(place);
		}
		// filterByPlace({place});
	};

	removeFilter = (place)=> {
		this.filter(place);
		filterByPlaces({places: this.state.places || []});
	};

	render() {
		let {places = []} = this.props || {};
		let selectedPlaces = places.filter((place)=>place.selected);
		if (selectedPlaces.length > 0) {
			selectedPlaces = selectedPlaces.map((place, i)=> <SelectedPlace key={i} index={i} name={place.place_name} name_sanitized={place.place_name_sanitized} removeFilter={this.removeFilter}/>);
		}


		places = places.map(
			(place) => {
				return <PlaceFilter key={place.id} filter={this.filter} name={place.place_name} name_sanitized={place.place_name_sanitized} selected={place.selected} disabled={this.props.loading}/>
			}
		);
		if (this.state.selectPlace == true) {
			return (
				<div>
					<div className="col-xs-12">
						<div onClick={this.toogleSelectPlace}>Filtrar</div>
						<ul className="list-unstyled place-filter">
							{places}
						</ul>
					</div>
				</div>
			);
		} else {
			if (selectedPlaces.length > 0) {
				return (
					<div>
						<div className="col-xs-12">
							<div onClick={this.toogleSelectPlace}>Filtrando por locais:
								<ul className="list-inline place-filter-selected">{selectedPlaces}</ul>
							</div>
						</div>
					</div>
				)
			} else {
				return (
					<div>
						<div className="col-xs-12">
							<div onClick={this.toogleSelectPlace}>Filtrar por local</div>
						</div>
					</div>
				)
			}

		}
	}
}
