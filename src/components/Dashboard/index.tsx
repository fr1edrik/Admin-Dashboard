import React, { Component } from 'react';
import Card from '../Card';
export default class Dashboard extends Component {
	render(): any {
		return (
			<div>
				<h3>Dashboard</h3>
				<Card title={'Shut down server'} body={'Dies ist ein test'} />
			</div>
		);
	}
}
