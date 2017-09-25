import {environment} from '../environments/environment';

export namespace HttpConfig {
	export const BASE_URL = environment.baseUrl;
	export const LOGIN = BASE_URL + '/authenticate';
	export const REGISTRATION = BASE_URL + '/register';
	export const USER_BY_ID = BASE_URL + '/user';
}