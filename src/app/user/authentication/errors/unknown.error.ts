import {ErrorTypes} from './error-types';

export class UnknownError extends Error {
	// noinspection JSUnusedGlobalSymbols
	readonly name = ErrorTypes.UNKNOWN_ERROR;
	constructor(public readonly message: string = 'Something went wrong') {
		super(message);
	}
}
