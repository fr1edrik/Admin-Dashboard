import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './router';

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='sidebar'>
					<Sidebar />
				</div>
				<div className='router-view'>
					<Switch>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								children={route.component}
							/>
						))}
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
