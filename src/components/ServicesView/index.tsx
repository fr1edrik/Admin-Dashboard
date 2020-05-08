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
import Service from 'common/interfaces/IService';
import { connect } from 'react-redux';
import { fetchServices } from 'common/store/actions/service';

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

interface ServicesViewProps {
	fetchServices: () => void;
}

class ServicesView extends Component<ServicesViewProps> {
	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchServices();
	}

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

const mapstateToProps = (state: { services: Service[] }) => ({
	services: state.services,
});
export default connect(mapstateToProps, { fetchServices })(ServicesView);
