import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	TableContainer,
	Table,
	Checkbox,
	CheckboxProps,
} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const rows = [
	{ name: 'castle', lastModified: '10/11/2018', size: '22 KB' },
	{ name: 'bureau', lastModified: '10/11/2018', size: '22 KB' },
	{ name: 'castletwo', lastModified: '10/11/2018', size: '22 KB' },
];

function onSelectAllClick(
	event: React.ChangeEvent<HTMLInputElement>,
	checked: boolean,
) {
	console.log(event);
}

export default function FileManager() {
	const classes = useStyles();
	const rowCount: number = 0;
	const numSelected: number = 0;

	return (
		<div>
			<input type='file' id='myfile' name='myfile' multiple></input>
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size='small'
					aria-label='a dense table'
				>
					<TableHead>
						<TableRow>
							<TableCell>Dessert (100g serving)</TableCell>
							<TableCell align='right'>Calories</TableCell>
							<TableCell align='right'>Fat&nbsp;(g)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.name}>
								<TableCell component='th' scope='row'>
									<Checkbox
										indeterminate={numSelected > 0 && numSelected < rowCount}
										checked={rowCount > 0 && numSelected === rowCount}
										onChange={onSelectAllClick}
										inputProps={{ 'aria-label': 'select all desserts' }}
									/>
								</TableCell>

								<TableCell component='th' scope='row'>
									{row.name}
								</TableCell>
								<TableCell align='right'>{row.lastModified}</TableCell>
								<TableCell align='right'>{row.size}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
