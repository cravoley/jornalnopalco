import { Component } from 'react';
import Loading from '../generic/loading';
import Waypoint from 'react-waypoint';

export default class InifiteScroll extends Component{
    constructor(props){
        super(props);
        console.log(props);
        let startPage = (props.page || props.page == 0) ? props.page : 1;
        this.state = {
            isLoading:true,
            hasMore:true,
            page : startPage
        };
        this.callLoadItems(this.state);
    }

    loadItems = ({page=1}) => {
        if(this.state.hasMore){
            this.setState({isLoading:true, page});
            this.callLoadItems({page});
        }
    }

    callLoadItems({page=1}){
        console.log(page);
        if(typeof this.props.loadItemCallback == 'function'){
            this.props.loadItemCallback({
                callback : ({hasMore=false}) => {
                    console.log("done",page, hasMore);
                    this.setState({isLoading : false, hasMore});
                },
                page
            })
        } else throw "Property loadItemCallback is required";
    }

    componentWillReceiveProps(props){
        let { loading } = props;
        this.setState({isLoading:loading});
    }

    _handleHeaderWaypoint = ({currentPosition}) => {
        if(currentPosition == Waypoint.inside){
            // if there is pages above the fold, we load it up on scroll to the top
            let { page } = this.state;
            page = parseInt(page);
            if(page > 1){
                --page;
                // this.loadItems({page});
            }
        }
    }

    _handleFooterWaypoint = ({currentPosition}) => {
        if(currentPosition == Waypoint.inside){
            let { page, hasMore } = this.state;
            page = parseInt(page);
            console.log(hasMore);
            if(hasMore){
                ++page;
                this.loadItems({page});
            }
        }
    }

    render(){

        return(
            <div>
                {!this.state.isLoading && <Waypoint onEnter={this._handleHeaderWaypoint} />}
                <div className="clearfix"></div>
                {this.props.children}
                <div className="clearfix"></div>
                {!this.state.isLoading && <Waypoint onEnter={this._handleFooterWaypoint} />}
                {this.state.isLoading && <Loading />}
            </div>
        )
    }
}
