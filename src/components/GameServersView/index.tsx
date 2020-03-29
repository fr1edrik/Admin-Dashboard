import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/TableItem';

const tableObject: ITableItem = {
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