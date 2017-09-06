import {DEFAULT_ENV} from './default';
import {EnvironmentType} from './type';

// noinspection JSUnusedGlobalSymbols
export const environment = {
	...DEFAULT_ENV,
	type: EnvironmentType.LOCAL,
	baseUrl: 'http://localhost:8080'
};
