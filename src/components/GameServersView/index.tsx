import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/ITableItem';
import GameServers from 'common/services/GameServers';
import IGameServer from 'common/interfaces/GameServer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Button from 'common/components/Button';

const tableObject: ITableItem = {
	titles: ['Server Name', 'Spiel'],
	data: [{ serverName: 'Mount and Blade', game: 'Mount and Blade' }],
};

function DirectButton(row: any) {
	return (
		<TableCell>
			<Link to={`/gameservers/${row.game}`}>
				<Button color={'primary'}>
					<IoIosArrowForward />
				</Button>
			</Link>
		</TableCell>
	);
}

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

		return (
			<Table items={tableObject}>
				<DirectButton />
			</Table>
		);
	}
}
