import axios, { AxiosResponse } from 'axios';
import { IMetrics } from 'common/interfaces/Metrics';

export default class Metrics {
	static getMetrics(): Promise<IMetrics> {
		return axios
			.get('http://localhost:8080/metrics')
			.then((r: AxiosResponse) => {
				if (r.status !== 200) return;
				return r.data;
			});
	}
}
