import Dashboard from '../components/Dashboard';
import GameServersView from '../components/GameServersView';

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
];
