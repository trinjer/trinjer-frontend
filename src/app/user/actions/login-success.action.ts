import {Action} from '@ngrx/store';
import {UserActionType} from './types';
import {TokenModel} from '../models/token.model';

export class LoginSuccessAction implements Action {
	readonly type = UserActionType.TOKEN_LOADED;

	constructor(public readonly payload: TokenModel) {
	}
}
