import { FETCH_SERVICES } from '../actions/service/types';

const initialState = {
	services: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_SERVICES:
			return {
				...state,
				services: action.payload,
			};
		default:
			return state;
	}
}
