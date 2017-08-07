import {ErrorTypes} from './error-types';

export class ServerError extends Error {
	// noinspection JSUnusedGlobalSymbols
	readonly name = ErrorTypes.SERVER_ERROR;
	constructor(public readonly message: string = 'Unknown server error') {
		super(message);
	}
}
