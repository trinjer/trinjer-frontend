import {Action} from '@ngrx/store';
import {UserActionType} from './types';

export class LoginFailedAction implements Action {
	readonly type = UserActionType.LOGIN_FAILED;

	constructor(public readonly payload: any) {
	}
}
