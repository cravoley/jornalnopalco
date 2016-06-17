import { Component } from 'react';
import properties from "../../stores/propertiesStore";
import { Link } from 'react-router';

export default class MovieHolder extends Component{

    link = (target)=>{
        return `${properties.relativeUrl}/cinema/${this.props.params.movie}/${target}`;
    }

    render(){
        return (
            <div>
                <h1>Filme {this.props.params.movie}</h1>
                <Link to={this.link("critica")} activeClassName="active"><button>Critica</button></Link><Link to={this.link("session")} activeClassName="active"><button>Sessões</button></Link>
                {this.props.children}
            </div>
        );
    }
}
