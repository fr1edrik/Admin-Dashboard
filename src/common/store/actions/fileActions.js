import { FETCH_FILES, UPLOAD_FILES } from './types';
import GameServers from 'common/services/GameServers';

export const fetchFiles = () => (dispatch) => {
	GameServers.getMapFiles().then((val) => {
		dispatch({ type: FETCH_FILES, payload: val });
	});
};

export const uploadFiles = (files) => (dispatch) => {
	GameServers.postMapFiles(files).then((val) => {
		dispatch({ type: UPLOAD_FILES, payload: val });
	});
};
