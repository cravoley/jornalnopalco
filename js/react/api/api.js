const PATH = "/jpapi";
const PATH_DEV = "/jornalnopalco2/jpapi";

import properties from "../stores/propertiesStore";

class Api {
    constructor(){
    }

    getPath(){
        return properties.relativeUrl + PATH;
    }

    getPosts(opts){
        if(opts.post_type)
            opts.api = opts.post_type;
        else {
            opts.api = "post";
        }
        return this._fetchAPI(opts);
    }

    getColumnists(opts){
        opts.api = "colunistas";
        return this._fetchAPI(opts);
    }



    getCover(opts){
        opts.api = "cover";
        return this._fetchAPI(opts);
    }

    findPost(opts){
        let { filter } = opts || {};
        if(!filter.post_type) filter.post_type = "";
        opts.api = `post/${filter.year}/${filter.month}/${filter.day}/${filter.slug}/${filter.post_type}`;
        return this._fetchAPI(opts);
    }

    findMovie(opts){
        let { filter } = opts || {};
        if(!filter.post_type) filter.post_type = "";
        opts.api = `post/${filter.year}/${filter.month}/${filter.day}/${filter.slug}/${filter.post_type}`;
        return this._fetchAPI(opts);
    }

    getPost(opts){
        opts.api = `post/post/${opts.id}`;
        return this._fetchAPI(opts);
    }

    getEvents(opts){
        opts.api = "event";
        return this._fetchAPI(opts);
    }

    getPlaces(opts){
        opts.api = "places"
        return this._fetchAPI(opts);
    }

    searchPosts(opts){
        opts.api = "search";
        return this._fetchAPI(opts);
    }

    loadColunistInfo(name, callback){
        let opts = {api:`colunistas/info/${name}`, callback};
        return this._fetchAPI(opts);
    }

    _fetchAPI(args){
        let { callback=(err, data)=>false, filter={}, page=0, api } = args || {};
        $.ajax({
            url:this._getEndpointUrl(api, page),
            data:filter,
            dataType:"json",
            method:"GET",
            success:(data) => callback(null, data || {}),
            error:(jqXHR, textStatus, error) => callback({
                    message:textStatus,
                    error:error
                }, {})
        });
    }

    _getEndpointUrl(api, page){
        if(!api) throw "Undefined endpoint";
        if(api == "wpjson"){
            return this.getPath()+"/wp-json/wp/v2/posts";
        }
        let path = api;
        if(page){
            path = path.concat(`/page/${page}`);
        }
        // let path = this.getEndpointPath(api);
        return this.getPath().concat(`/${path}`);
    }

}

const api = new Api;
export default api;
