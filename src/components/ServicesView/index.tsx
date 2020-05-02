import React, { Component } from 'react';
import Table from 'common/components/Table';
import { ITableItem } from 'common/interfaces/ITableItem';
import {
	IoIosPlay as Play,
	IoIosPause as Pause,
	IoIosRepeat as Repeat,
} from 'react-icons/io';
import Button from 'common/components/Button';
import './style.scss';

function StartHandleComp() {
	return (
		<div>
			<Button color='primary'>
				<Play />
			</Button>
			<Button color='secondary'>
				<Pause />
			</Button>
			<Button color='default'>
				<Repeat />
			</Button>
		</div>
	);
}

function Status(status: string) {
	return <div className={status}></div>;
}

export default class ServicesView extends Component {
	render(): any {
		const tableObject: ITableItem = {
			titles: ['Service Name', 'Status', 'Action'],
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
			],
		};
		return <Table items={tableObject} />;
	}
}
