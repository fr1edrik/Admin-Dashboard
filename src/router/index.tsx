import Dashboard from 'components/Dashboard';
import GameServersView from 'components/GameServersView';
import GameServersViewDetail from 'components/GameServersView/GameserversViewDetail';

export const routes = [
	{
		path: '/',
		component: Dashboard,
		exact: true,
	},
	{
		path: '/dashbaoard',
		component: Dashboard,
		exact: true,
	},
	{
		path: '/gameservers',
		component: GameServersView,
		exact: true,
	},
	{
		path: '/gameservers/:serverName',
		component: GameServersViewDetail,
		exact: true,
	},
];
