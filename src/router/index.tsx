import Dashboard from 'components/Dashboard';
import GameServersView from 'components/GameServersView';
import GameServersViewDetail from 'components/GameServersView/GameserversViewDetail';
import FileManager from 'common/components/FileManager';
export const routes = [
	{
		path: '/',
		component: Dashboard,
		exact: true,
	},
	{
		path: '/dashboard',
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
		component: FileManager,
		exact: true,
	},
];
