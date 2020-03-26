import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './router';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<Sidebar />
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
				</header>
			</div>
		</Router>
	);
}

export default App;
