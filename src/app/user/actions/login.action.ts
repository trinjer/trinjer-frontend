import {Action} from '@ngrx/store';
import {Credentials} from '../authentication/login/models/credentials.interface';
import {UserActionType} from './types';

export class LoginAction implements Action {
	readonly type = UserActionType.LOGIN;

	constructor(public readonly payload: Credentials) {
	}
}
