import React, { Component } from 'react';
import Table from '../common/Table';

const tableObject = {
	titles: ['Name', 'game'],
	data: [
		{ name: 'Mount and Blade', game: 'Mount and Blade' },
		{ name: 'MineServer', game: 'Minecraft' },
		{ name: 'CountServer', game: 'CounterSrike' },
	],
};

export default class GameServersView extends Component {
	render(): any {
		return <Table items={tableObject} />;
	}
}
