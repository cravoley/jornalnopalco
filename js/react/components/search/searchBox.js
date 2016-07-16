import { Component } from 'react';
import { browserHistory } from 'react-router';
import properties from "stores/propertiesStore";

export default class SearchBox extends Component {



    url(path){
        return properties.relativeUrl+path;
    }

    handleSearch = (e) => {
        let search = () => {
            if(this.refs.searchText.value){
                let searchString = this.refs.searchText.value;
                searchString = searchString.replace(/\//gi," ");
                return browserHistory.push(this.url(`/search/${searchString}`));
            }
        };
        let { type } = e;
        if(type == "keyup"){
            if(e.which == 13){
                // enter
                search();
            }
        } else if(type == "click"){
            search();
        }
    }

    render(){
        return (
            <div className="input-group">
                <input type="text" placeholder="Buscar" ref="searchText" defaultValue={this.props.params.searchQuery} className="form-control hidden-sm" onKeyUp={this.handleSearch} />
                <div className="input-group-addon" onClick={this.handleSearch}><i className="fa fa-search"></i></div>
            </div>
        );
    }
}
