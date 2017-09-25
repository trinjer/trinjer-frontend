import {LoginSuccessAction} from './login-success.action';
import {LoginAction} from './login.action';
import {LoginFailedAction} from './login-failed.action';

export const UserActionType = {
	TOKEN_LOADED: '[token] loaded',
	LOGOUT: '[token] delete',
	LOGIN: '[user] login',
	LOGIN_FAILED: '[user] login failed'
};

export type AllUserActions = LoginSuccessAction | LoginAction | LoginFailedAction;
