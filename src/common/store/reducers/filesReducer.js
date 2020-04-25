import { FETCH_FILES, UPLOAD_FILES } from '../actions/types';

const initialState = {
	files: [],
	uploaded: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_FILES: {
			return {
				...state,
				files: action.payload,
			};
		}
		case UPLOAD_FILES: {
			return {
				...state,
				uploaded: action.payload,
			};
		}
		default:
			return state;
	}
}
