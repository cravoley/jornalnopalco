import Movie from 'pages/movies/movie';
import MovieCast from 'pages/movies/movieCast'
import MovieHolder from 'pages/movies/movieHolder';
import MovieList from 'pages/movies/movieList'
import MovieTrailer from 'pages/movies/movieTrailer'
import MovieSession from 'pages/movies/movieSession';
import MovieStoryline from 'pages/movies/movieStoryline';

const route = {
    path:"cinema",
    indexRoute:{component:MovieList},
    childRoutes:[
        {
            path:":year/:month/:day/:slug",
            component:MovieHolder,
            // redirect to currentURL/critica
            indexRoute: { onEnter: (nextState, replace) => replace(nextState.location.pathname+'critica') },
            childRoutes:[
                {
                    path:"critica",
                    component:Movie
                },
                {
                    path:"session",
                    component:MovieSession
                },
                {
                    path:"sinopse",
                    component:MovieStoryline
                },
                {
                    path:"ficha",
                    component:MovieCast
                },
                {
                    path:"trailer",
                    component:MovieTrailer
                }
            ]
        }
    ]
}

export default route;
