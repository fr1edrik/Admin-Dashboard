import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/ITableItem';

export default class ServicesView extends Component {
	render(): any {
		const tableObject: ITableItem = {
			titles: ['Service Name', 'Spiel'],
			data: [{ serverName: 'Sinusbot', game: 'SinusBot' }],
		};
		return <Table items={tableObject} />;
	}
}
