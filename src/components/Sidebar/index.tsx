import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default class Sidebar extends Component {
	render(): any {
		return (
			<div className='sidebar'>
				<ul>
					<li>
						<Link to='/dashboard'>Dashboard</Link>
					</li>
				</ul>
			</div>
		);
	}
}