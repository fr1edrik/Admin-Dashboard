import React from 'react';
import Sidebar from 'components/Sidebar';
import Headerbar from 'components/Headerbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'router';
import './style.scss';

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='sidebar'>
					<Sidebar />
				</div>
				<div className='content'>
					<div className='headerbar'>
						<Headerbar />
					</div>
					<div className='router-view'>
						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									component={route.component}
								/>
							))}
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
