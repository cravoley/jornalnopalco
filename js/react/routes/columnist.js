import ColumnistsPage from 'pages/columnist/columnistsPage';
import ColumnistListPage from 'pages/columnist/list';
import ColumnistPage from 'pages/columnist/columnistPage';


const route = {
    path:"colunistas",
    indexRoute:{component:ColumnistsPage}
};



const routeOpen = {
    path:"coluna",
    indexRoute:{component:ColumnistListPage},
    childRoutes:[
        {
            path:":columnist",
            component:ColumnistListPage
        },
        {
            path:":columnist/:year/:month/:day/:slug",
            component:ColumnistPage
        }
    ]
}
export default route;
export const columnistRoutes = route;
export const columnistOpenRoutes = routeOpen;
