import { Component } from 'react';
import { Link } from 'react-router';
import Loading from 'components/loading';

export default class LastestList extends Component {


    render(){
        let { loading, posts } = this.props;
        let list = posts.map((post, i)=>{
            let current = this.props.current && this.props.current == post.id;
            return (
                <li key={i}>
                    {!current && <Link to={post.link}>{post.title}</Link>}
                    {current && <span>{post.title}</span>}
                </li>
            );
        });
        return (
            <div className="latestPosts">
                <div className="row">
                    <div className="col-xs-12">
                        <h2>Últimas {this.props.title}</h2>
                        { loading && <Loading />}
                        { !loading && <ul className="list-unstyled">{list}</ul> }
                    </div>
                </div>                
            </div>
        );
    }
}
