import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/ITableItem';
import GameServers from 'common/services/GameServers';
import IGameServer from 'common/interfaces/GameServer';

const tableObject: ITableItem = {
	titles: ['Server Name', 'Spiel'],
	data: [
		{ serverName: 'Mount and Blade', game: 'Mount and Blade' },
		{ serverName: 'MineServer', game: 'Minecraft' },
		{ serverName: 'CountServer', game: 'CounterSrike' },
	],
};

export default class GameServersView extends Component {
	constructor(props: Object) {
		super(props);

		this.state = { gameServerList: [{ serverName: '', game: '' }] };
	}

	componentDidMount() {
		GameServers.getGameServerList().then((val) =>
			this.setState({ gameServerList: val }),
		);
	}

	render(): any {
		// @ts-ignore
		const { gameServerList }: { gameServerList: IGameServer[] } = this.state;

		const tableObject: ITableItem = {
			titles: ['Server Name', 'Spiel'],
			data: gameServerList,
		};

		return <Table items={tableObject} />;
	}
}
