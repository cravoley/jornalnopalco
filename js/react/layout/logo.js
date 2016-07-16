import { Component } from 'react';
import { Link } from 'react-router';

export default class Logo extends Component {
    render(){
        return (
            <div className="row">
                <div className="logo col-xs-12">
                    <Link to={this.props.url("/")}>
                        <span className="sr-only"><h1>Jornal no Palco</h1></span>
                        <img className="center-block img-responsive" src={this.props.logoUrl} title="Jornal no Palco" />
                    </Link>
                </div>
            </div>
        )
    }
}
