import axios, { AxiosResponse } from 'axios';
import Service, { ServiceStarter } from 'common/interfaces/IService';

export default class Services {
	static getServices(): Promise<Service[]> {
		return axios
			.get('http://localhost:8080/services')
			.then((r: AxiosResponse) => {
				if (r.status !== 200) return;
				return r.data;
			});
	}

	static handleStartService(data: ServiceStarter): Promise<Service> {
		return axios.post('https://localhost:8080/services', data);
	}
}
