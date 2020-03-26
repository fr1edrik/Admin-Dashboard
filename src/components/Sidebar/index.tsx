import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './style.scss';

export default class Sidebar extends Component {
	render(): any {
		return (
			<div>
				<div>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
