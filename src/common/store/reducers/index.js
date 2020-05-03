import { combineReducers } from 'redux';
import fileReducer from './fileReducer';
import serviceReducer from './serviceReducer';

export default combineReducers({
	files: fileReducer,
	services: serviceReducer,
});
