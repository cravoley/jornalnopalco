import { Component } from 'react';
import Loading from '../generic/loading';
import Waypoint from 'react-waypoint';

export default class InifiteScroll extends Component{
    constructor(props){
        super(props);
        let startPage = (props.page || props.page == 0) ? props.page : 0;
        this.state = {
            isLoading:true,
            hasMore:false,
            page : startPage,
            data:[]
        };
        this.config = {
            delay:500
        };
        this.callLoadItems(this.state);
    }

    loadItems = ({page}) => {
        if(this.state.hasMore){
            // define hasMore as false because we don't want to load more items before we are done adding items to the result list
            this.setState({isLoading:true, page, hasMore:false});
            this.callLoadItems({page});
        }
    }

    callLoadItems({page=0}){
        if(typeof this.props.loadData != 'function') throw "Property loadData is required";

        let args = {
            callback: ({hasMore=false, data=[], clean=false}) => {
                if(clean)
                    this.setState({data});
                this.appendItems({data, hasMore});
            },
            page
        }
        this.props.loadData(args);
    }

    // set an interval to append data to data list
    appendItems = ({data=[], hasMore=false}) => {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if(data.length > 0){
                let item = data.shift();
                let stateData = this.state.data;
                stateData.push(item);
                this.setState({data:stateData});
            } else {
                clearInterval(this.interval);
                this.setState({hasMore, isLoading:false});
            }
        }, this.config.delay);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    componentWillReceiveProps(props){
        let { clean=false } = props || {};
        // console.log(clean);
        if(clean){
            clearInterval(this.interval);
            // clean content list and stop interval if it's set
            this.setState({data:[], page:0, hasMore:true});
            this.callLoadItems({});
        }
        // console.log(props);
        // let { loading, pics } = props;
        // this.setState({isLoading:loading, pics});
    }

    _handleHeaderWaypoint = ({currentPosition}) => {
        // if(currentPosition == Waypoint.inside){
        //     // if there is pages above the fold, we load it up on scroll to the top
        //     let { page } = this.state;
        //     page = parseInt(page);
        //     if(page > 1){
        //         --page;
        //         // this.loadItems({page});
        //     }
        // }
    }

    _handleFooterWaypoint = ({currentPosition}) => {
        if(currentPosition == Waypoint.inside){
            let { page, hasMore } = this.state;
            page = parseInt(page);
            if(hasMore !== false){
                ++page;
                this.loadItems({page});
            }
        }
    }

    render(){
        let data;
        if(this.state.data.length > 0){
            data = this.state.data.map(
                (data, i) => {
                    return React.Children.map(this.props.children, (children)=> {
                        if(this.props.additionalProps){
                            for (var attrname in this.props.additionalProps) { data[attrname] = this.props.additionalProps[attrname]; }
                        }
                        return React.cloneElement(children, data);
                    });
            });
        } else if(this.props.messageEmpty && this.state.isLoading == false){
            data = <div class="empty message">{this.props.messageEmpty}</div>
        }
        console.log(data, this.state.isLoading);
        return(
            <div>
                {!this.state.isLoading && <Waypoint onEnter={this._handleHeaderWaypoint} />}
                <div className="clearfix"></div>
                {data}
                <div className="clearfix"></div>
                {!this.state.isLoading && <Waypoint onEnter={this._handleFooterWaypoint} />}
                {this.state.isLoading && <Loading />}
            </div>
        )
    }
}
