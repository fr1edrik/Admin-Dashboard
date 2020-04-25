import { combineReducers } from 'redux';
import fileReducer from './filesReducer';

export default combineReducers({
	files: fileReducer,
});
