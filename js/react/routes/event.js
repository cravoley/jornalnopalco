import EventListPage from 'pages/events/list';
import EventPage from 'pages/events/eventPage';


const route = {
    path:"evento",
    indexRoute:{component:EventListPage},
    childRoutes:[
        {
            path:":place/:year/:month/:day/:slug",
            component:EventPage
        }
    ]
};
export default route;
