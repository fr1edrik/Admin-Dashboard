import axios, { AxiosResponse } from 'axios';
import IGameServer from 'common/interfaces/GameServer';

export default class GameServer {
	static getGameServerList(): Promise<IGameServer[]> {
		return axios
			.get('http://localhost:8080/servers/gameServers')
			.then((r: AxiosResponse) => {
				if (r.status !== 200) return;
				return r.data;
			});
	}
}
