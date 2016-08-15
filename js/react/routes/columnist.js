import ColumnistsPage from 'pages/columnist/columnistsPage';
import ColumnistListPage from 'pages/columnist/list';
import ColumnistPage from 'pages/columnist/columnistPage';
import ColumnistHolder from 'pages/columnist/columnistHolder';


const route = {
	path: "colunistas",
	indexRoute: {component: ColumnistsPage}
};


const routeOpen = {
	path: "coluna",
	indexRoute: {component: ColumnistListPage},
	component: ColumnistHolder,
	childRoutes: [
		{
			path: ":columnist/:year/:month/:day/:slug",
			component: ColumnistPage
		},
		{
			path: ":columnist",
			component: ColumnistListPage
		}
	]
}
export default route;
export const columnistRoutes = route;
export const columnistOpenRoutes = routeOpen;
