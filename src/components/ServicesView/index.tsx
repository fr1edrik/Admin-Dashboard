import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/ITableItem';
import {
	IoIosPlay as Play,
	IoIosPause as Pause,
	IoIosRepeat as Repeat,
} from 'react-icons/io';
import IconButton from '@material-ui/core/IconButton';
import './style.scss';

function StartHandleComp() {
	return (
		<div>
			<IconButton>
				<Play />
			</IconButton>
			<IconButton>
				<Pause />
			</IconButton>
			<IconButton>
				<Repeat />
			</IconButton>
		</div>
	);
}

function Status(status: string) {
	return <div className={status}>{status}</div>;
}

export default class ServicesView extends Component {
	render(): any {
		const tableObject: ITableItem = {
			titles: ['Service Name', 'Status', ''],
			data: [
				{
					serviceName: 'Sinusbot',
					status: Status('active'),
					action: StartHandleComp(),
				},
				{
					serviceName: 'TeamSpeak3',
					status: Status('paused'),
					action: StartHandleComp(),
				},
				{
					serviceName: 'Some Service',
					status: Status('pending'),
					action: StartHandleComp(),
				},
			],
		};
		return <Table items={tableObject} />;
	}
}
