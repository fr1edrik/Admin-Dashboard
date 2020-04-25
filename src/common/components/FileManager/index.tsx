import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	TableContainer,
	Checkbox,
	CheckboxProps,
	Table,
} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import GameServer from 'common/services/GameServers';
import './style.scss';
import { find } from 'lodash';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { connect } from 'react-redux';
import { fetchFiles, uploadFiles } from '../../store/actions/fileActions';

import Button from 'common/components/Button';

interface FileManagerProps {
	files: [];
	fetchFiles: () => void;
	uploadFiles: (formData: FormData) => void;
}

class FileManager extends Component<FileManagerProps> {
	state: { files: any; selections: boolean[] };

	private formData: any = null;

	constructor(props: FileManagerProps) {
		super(props);

		this.state = {
			files: [
				{
					name: 'name',
					lastModified: 'lastModified',
					size: '10',
				},
			],
			selections: [false],
		};

		this.handleFileChange = this.handleFileChange.bind(this);
		this.uploadSelectedFiles = this.uploadSelectedFiles.bind(this);
	}

	componentDidMount() {
		this.props.fetchFiles();
	}

	handleFileChange($e: any) {
		let files: FileList = $e.target.files;
		let myFormData = new FormData();
		// @ts-ignore
		for (let file of files) {
			myFormData.append('mapFiles', file, file['name']);
		}
		this.formData = myFormData;
	}

	uploadSelectedFiles() {
		this.props.uploadFiles(this.formData);
	}

	checkboxChange(index: number) {
		// @ts-ignore
		const newSelection = this.state.selections.map(
			(selection: any, i: number) => {
				if (i !== index) return selection;
				selection = !selection;
				return selection;
			},
		);
		this.setState((state) => ({
			selections: newSelection,
		}));
	}

	deleteHandler() {
		// @ts-ignore
		const { files, selections } = this.state;
		selections.forEach((element: boolean, index: any) => {
			if (element) console.log(files[index]);
		});
	}

	render(): any {
		const { selections } = this.state;

		// @ts-ignore
		const { files } = this.props.files;
		return (
			<div>
				<h3>Map Files</h3>
				<div className='file-uploader'>
					{/* 
					// @ts-ignore */}
					<label for='myfile'>Choose mapfile to upload</label>
					<input
						onChange={this.handleFileChange}
						type='file'
						id='myfile'
						name='myfile'
						multiple
					></input>
					{/* 
					// @ts-ignore */}
					<div onClick={(e) => this.uploadSelectedFiles()} className='button'>
						<Button color='primary'>Upload</Button>
					</div>
				</div>

				{/* 
					// @ts-ignore */}
				<button onClick={(e) => this.deleteHandler()}>
					<DeleteOutlinedIcon />
				</button>

				<TableContainer component={Paper}>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>Name</TableCell>
								<TableCell>Date</TableCell>
								<TableCell>Size</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{files.map((row: any, i: number) => (
								<TableRow key={row.name}>
									{/* 
									//@ts-ignore */}
									<TableCell>
										<Checkbox
											onClick={(e) => this.checkboxChange(i)}
											// indeterminate={numSelected > 0 && numSelected < rowCount}
											checked={selections[i]}
											// @ts-ignore
											inputProps={{ 'aria-label': 'select all desserts' }}
										/>
									</TableCell>
									<TableCell component='th' scope='row'>
										{row.name}
									</TableCell>
									<TableCell>{row.lastModified}</TableCell>
									<TableCell>{row.size}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		);
	}
}

// const useStyles = makeStyles({
// 	table: {
// 		minWidth: 650,
// 	},
// });

// const rows = [
// 	{ name: 'castle', lastModified: '10/11/2018', size: '22 KB' },
// 	{ name: 'bureau', lastModified: '10/11/2018', size: '22 KB' },
// 	{ name: 'castletwo', lastModified: '10/11/2018', size: '22 KB' },
// ];

// function onSelectAllClick(
// 	event: React.ChangeEvent<HTMLInputElement>,
// 	checked: boolean,
// ) {
// 	console.log(event);
// }

// export default function FileManager() {
// 	const classes = useStyles();
// 	const rowCount: number = 0;
// 	const numSelected: number = 0;

// 	return (
// 		<div>
// 			<input type='file' id='myfile' name='myfile' multiple></input>
// 			<TableContainer component={Paper}>
// 				<Table
// 					className={classes.table}
// 					size='small'
// 					aria-label='a dense table'
// 				>
// 					<TableHead>
// 						<TableRow>
// 							<TableCell></TableCell>
// 							<TableCell>Name</TableCell>
// 							<TableCell>Date</TableCell>
// 							<TableCell>Size</TableCell>
// 						</TableRow>
// 					</TableHead>
// 					<TableBody>
// 						{rows.map((row) => (
// 							<TableRow key={row.name}>
// 								<TableCell component='th' scope='row'>
// 									<Checkbox
// 										indeterminate={numSelected > 0 && numSelected < rowCount}
// 										checked={rowCount > 0 && numSelected === rowCount}
// 										onChange={onSelectAllClick}
// 										inputProps={{ 'aria-label': 'select all desserts' }}
// 									/>
// 								</TableCell>

// 								<TableCell component='th' scope='row'>
// 									{row.name}
// 								</TableCell>
// 								<TableCell>{row.lastModified}</TableCell>
// 								<TableCell>{row.size}</TableCell>
// 							</TableRow>
// 						))}
// 					</TableBody>
// 				</Table>
// 			</TableContainer>
// 		</div>
// 	);
// }
const mapstateToProps = (state: any) => ({
	files: state.files,
});
export default connect(mapstateToProps, { fetchFiles, uploadFiles })(
	FileManager,
);
