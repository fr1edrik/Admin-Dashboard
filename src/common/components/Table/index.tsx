import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './style.scss';
import { ITableItem } from 'common/interfaces/ITableItem';

export default function SimpleTable({ items }: { items: ITableItem }) {
	return (
		<TableContainer component={Paper}>
			<Table className='table' aria-label='simple table'>
				<TableHead className='table-head'>
					<TableRow>
						{items.titles.map((row: String, index: number) => (
							<TableCell key={index}>
								<span className='cell'>{row}</span>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody className='table-body'>
					{items.data.map((row: any, index: number) => (
						<TableRow key={index}>
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
