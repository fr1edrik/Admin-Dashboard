export default interface Service {
	name: string;
	status: string;
}

export interface ServiceStarter extends Service {
	startHandle: string;
}
