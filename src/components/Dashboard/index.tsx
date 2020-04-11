import React, { Component } from 'react';
import Card from 'common/components/Card';
import Metrics from 'common/services/Metrics';
import { size } from 'lodash';
import { IMetrics, Memory } from 'common/interfaces/Metrics';
import { Grid } from '@material-ui/core';

export default class Dashboard extends Component {
	constructor(props: Object) {
		super(props);
		this.state = { metrics: {} };
	}
	componentDidMount() {
		Metrics.getMetrics().then((metrics: IMetrics) =>
			this.setState({ metrics }),
		);
	}

	// Compute of memory
	computePercent(obj: Memory) {
		const res = parseInt(obj.total) / parseInt(obj.used);
		return Math.round(res);
	}

	render(): any {
		// @ts-ignore
		const { metrics }: { metrics: IMetrics } = this.state;
		return (
			<div>
				<h3>Dashboard</h3>
				<Grid container spacing={1}>
					<Grid item xs={12} sm={6}>
						<Card
							title={'CPU auslastung'}
							body={`${size(metrics) > 0 ? metrics.cpuUsage : ''}%`}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Card
							title={'RAM Nutzung'}
							body={`${
								size(metrics) > 0
									? this.computePercent(metrics.memoryUsage.memory)
									: ''
							}%`}
						/>
					</Grid>

					<Grid item xs={12} sm={6}>
						<Card
							title={'Swap Nutzung'}
							body={`${
								size(metrics) > 0
									? this.computePercent(metrics.memoryUsage.swap)
									: ''
							}%`}
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}
