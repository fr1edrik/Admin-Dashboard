import Service from 'common/interfaces/IService';

export default class Services {
	static getServices(): Promise<Service[]> {
		return Promise.resolve([
			{
				name: 'Sinusbot',
				status: 'active',
			},
			{
				name: 'TeamSpeak',
				status: 'paused',
			},
		]);
	}
}
