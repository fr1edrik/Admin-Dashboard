import React, { Component } from 'react';
import Card from 'common/components/Card';
import { useParams } from 'react-router-dom';

export default class GameServersViewDetail extends Component {
	get serverName(): String {
		const { serverName } = useParams();
		return serverName as String;
	}

	render(): any {
		return <Card title={this.serverName} body={'This is text'}></Card>;
	}
}
