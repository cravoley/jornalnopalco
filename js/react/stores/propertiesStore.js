class Properties {

	setConfiguration(props) {
		this.state = props;
		this.baseUrl = props.baseUrl;
		this.templateUrl = props.templateUrl;
		this.relativeUrl = props.baseRelativeUrl;
		this.newsListPath = `${props.baseRelativeUrl}/noticias`;
		this.eventListPath = `${props.baseRelativeUrl}/evento`;
		this.galleryListPath = `${props.baseRelativeUrl}/galeria`;
		this.moviesListPath = `${props.baseRelativeUrl}/cinema`;
		this.eagoraListPath = `${props.baseRelativeUrl}/eagora`;
	}

	getConfiguration() {
		return this.state;
	}

	getBaseUrl() {
		return this.baseUrl;
	}

}
const properties = new Properties;
export default properties;
