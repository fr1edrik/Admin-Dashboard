import { FETCH_SERVICES, UPDATE_START_HANDLE } from './types';
import Services from 'common/services/__mocks__/Services';

export const fetchServices = () => (dispatch) => {
	Services.getServices().then((val) => {
		dispatch({ type: FETCH_SERVICES, payload: val });
	});
};
