import { Component } from 'react';
import { Link } from 'react-router';

export default class Slider extends Component {

    constructor(props){
        super(props);
        let { posts=[] } = props || {};
        this.state = {
            posts,
            index:0
        };
    }

    componentWillReceiveProps(props){
        let { posts=[] } = props || {};
        this.setState({posts});
    }

    componentDidMount(){
        if(this.state.posts.length > 0){
            this.interval = setInterval(() => {
                this.refs.news.className = "animated fadeOutLeft";
                // give it time to remove the current item from the screen
                this.timeout = setTimeout(()=> {
                    // console.log(this.state.index, this.state.posts.length -1, this.state.index > this.state.posts.length -1);
                    if(this.state.index >= this.state.posts.length -1){
                        this.setState({index:0});
                    } else {
                        this.setState({index:++this.state.index});
                    }
                        this.refs.news.className = "animated fadeInRightBig";
                }, 100);
            }, 5 * 1000);
        }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        // console.log(this.state.index, this.state.posts.length);
        let post = this.state.posts[this.state.index];
        return (
            <div className="col-xs-12">
                <div className="slider">
                    <div className="slide-label">Últimas notícias</div>
                    <div className="items">
                        <div className="animated fadeInRightBig" ref="news">
                            <Link to={post.link}>
                                {post.title}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
