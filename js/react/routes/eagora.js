import List from 'pages/eagora/list';
import EagoraPage from 'pages/eagora/single';

const route = {
	path: "eagora",
	indexRoute: {component: List},
	childRoutes: [
		{
			path: ":year/:month/:day/:slug",
			component: EagoraPage
		}
	]
};
export default route;
