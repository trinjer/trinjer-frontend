import {ErrorTypes} from './error-types';

export class AuthorizationError extends Error {
	// noinspection JSUnusedGlobalSymbols
	readonly name = ErrorTypes.AUTHORIZATION;

	constructor(public readonly message: string = 'Authorization failed!') {
		super(message);
	}
}
