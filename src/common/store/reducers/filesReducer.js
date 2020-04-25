import { FETCH_FILES } from '../actions/types';

const initialState = {
	files: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_FILES: {
			return {
				...state,
				files: action.payload,
			};
		}
		default:
			return state;
	}
}
