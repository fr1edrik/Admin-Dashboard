import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.scss';

export default function SimpleTable(props: any) {
	return (
		<TableContainer component={Paper}>
			<Table className='table' aria-label='simple table'>
				<TableHead className='table-head'>
					<TableRow>
						{props.items.titles.map((row: Array<String>) => (
							<TableCell>
								<span className='cell'>{row}</span>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody className='table-body'>
					{props.items.data.map((row: any) => (
						<TableRow key={row.name}>
							<TableCell component='th' scope='row'>
								{row.name}
							</TableCell>
							<TableCell>{row.game}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
