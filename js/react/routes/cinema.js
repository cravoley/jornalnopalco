import Movie from 'pages/cinema/movie';
import MovieList from 'pages/cinema/movieList'
import MovieHolder from 'pages/cinema/movieHolder';
import MovieSession from 'pages/cinema/movieSession';

const route = {
    path:"cinema",
    indexRoute:{component:MovieList},
    childRoutes:[
        {
            path:":movie",
            component:MovieHolder,
            // redirect to currentURL/critica
            indexRoute: { onEnter: (nextState, replace) => replace(nextState.location.pathname+'/critica') },
            childRoutes:[
                {
                    path:"critica",
                    component:Movie
                },
                {
                    path:"session",
                    component:MovieSession
                }
            ]
        }
    ]
}

export default route;
