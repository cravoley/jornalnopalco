import { Component } from 'react';
import properties from "stores/propertiesStore";
import List from 'pages/list';
import ListEntry from './movieListEntry';
import * as actions from 'actions/moviesActions';
import store from 'stores/movies';

export default class CinemaList extends Component{


    // componentWillMount(){
    //     let movies = [
    //         "Senhor dos Aneis",
    //         "O Hobbit",
    //         "Warcraft",
    //         "Capitão América",
    //         "Vingadores 2: A era de ultron",
    //         "Homem de fero 4",
    //         "Prenda-me se for capaz",
    //         "Batman Dark Knight",
    //         "Batman Begins",
    //         "Batman Returns",
    //         "Spider man"];
    //     this.timeout = setInterval(()=> {
    //         if(movies.length > 0){
    //             let m = this.state.movies;
    //             m.push(movies.shift());
    //             this.setState({movies:m});
    //         } else {
    //             clearInterval(this.timeout);
    //         }
    //     }, 300);
    // }
    //
    // componentWillUnmount(){
    //     clearInterval(this.timeout);
    // }

    render(){
        // let movies = this.state.movies.map((i)=>(
        //     <li key={i} className="animated fadeInRight">
        //         <h2><Link to={`${properties.relativeUrl}/cinema/${i}`}>{`${i}`}</Link></h2>
        //     </li>
        // ));

        // return (
        //     <div>
        //         <h1>Review de cinema</h1>
        //         <ul className="list-unstyled">
        //             {movies}
        //         </ul>
        //     </div>
        // );
        return (
            <List actions={actions} store={store} messageEmpty="Não existem filmes cadastrados">
                <ListEntry />
            </List>
        );
    }
}
