import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialButton from '@material-ui/core/Button';

interface CustomInputProps {
	color?: string;
	size?: string;
	children?: any;
}

export default class Button extends Component<CustomInputProps> {
	constructor(props: CustomInputProps) {
		super(props);
	}

	render(): any {
		const { color, children, size } = this.props;
		return (
			// @ts-ignore
			<MaterialButton
				variant='contained'
				color={color ? color : 'default'}
				size={size ? size : 'medium'}
			>
				{children}
			</MaterialButton>
		);
	}
}
