import React, { Component } from 'react';
import Card from 'common/components/Card';
import { useParams } from 'react-router-dom';

interface CustomInputProps {
	match: {
		params: {
			serverName: String;
		};
	};
}

export default class GameServersViewDetail extends Component<CustomInputProps> {
	constructor(props: any) {
		super(props);
	}

	get serverName(): String {
		return this.props.match.params.serverName;
	}

	render(): any {
		return (
			<div>
				<h3>{this.serverName}</h3>
				<Card title='' body='' />
			</div>
		);
	}
}
