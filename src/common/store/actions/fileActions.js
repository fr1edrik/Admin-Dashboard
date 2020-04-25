import { FETCH_FILES, UPLOAD_FILES } from './types';
import GameServers from 'common/services/GameServers';

export const fetchFiles = () => (dispatch) => {
	dispatch({ type: FETCH_FILES, payload: GameServers.getMapFiles() });
};
