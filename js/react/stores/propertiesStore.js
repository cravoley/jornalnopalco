class Properties {

    setConfiguration(props){
        this.state = props;
        this.baseUrl = props.baseUrl;
        this.templateUrl = props.templateUrl;
        this.relativeUrl = props.baseRelativeUrl;
    }

    getConfiguration(){
        return this.state;
    }

    getBaseUrl(){
        return this.baseUrl;
    }

}
const properties = new Properties;
export default properties;
