import { Component } from 'react';
import PlaceFilter from './placeFilter';

export default class SelectPlaces extends Component {

	constructor(props) {
		super(props);
		this.state = {selectPlace: false};

	}

	toogleSelectPlace = ()=> {
		this.setState({selectPlace: !this.state.selectPlace});
	};

	render() {
		let {places = []} = this.props || {};
		let selectedPlaces = places.filter((place)=>place.selected).map((place)=>place.place_name);
		places = places.map(
			(place) => {
				return <PlaceFilter key={place.id} name={place.place_name} name_sanitized={place.place_name_sanitized} selected={place.selected} disabled={this.props.loading}/>
			}
		);
		if (this.state.selectPlace == true) {
			return (
				<div>
					<div className="col-xs-12">
						<h4 className="text-uppercase text-center">Local</h4>
						<div onClick={this.toogleSelectPlace}>Close</div>
						<ul className="list-unstyled place-filter">
							{places}
						</ul>
					</div>
				</div>
			);
		} else {
			return (
				<div>
					<div className="col-xs-12">
						<h4 className="text-uppercase text-center">Local</h4>
						<div onClick={this.toogleSelectPlace}>{selectedPlaces.length > 0 ? selectedPlaces : "Filtrar por local"}</div>
					</div>
				</div>
			)
		}
	}
}
