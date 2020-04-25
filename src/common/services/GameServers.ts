import axios, { AxiosResponse } from 'axios';
import IGameServer from 'common/interfaces/GameServer';

export default class GameServers {
	static getGameServerList(): Promise<IGameServer[]> {
		return axios
			.get('http://localhost:8080/servers/gameServers')
			.then((r: AxiosResponse) => {
				if (r.status !== 200) return;
				return r.data;
			});
	}

	static getMapFiles(): Promise<any[]> {
		return axios
			.get('http://localhost:8080/servers/gameServers/mb-warband/mapFiles')
			.then((r: AxiosResponse) => {
				if (r.status !== 200) return;
				return r.data;
			});
	}

	static postMapFiles(data: any): any {
		return axios.post(
			'http://localhost:8080/servers/gameServers/mb-warband/mapFiles',
			data,
		);
	}
}
