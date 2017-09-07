import {AuthorizationError} from './authorization.error';
import {ServerError} from './server.error';
import {UnknownError} from './unknown.error';

export class ErrorFactory {
	static getErrorByCode(statusCode: number): Error {
		if (statusCode === 403) {
			return new AuthorizationError();
		} else if (statusCode >= 500) {
			return new ServerError();
		} else {
			return new UnknownError();
		}
	}
}
