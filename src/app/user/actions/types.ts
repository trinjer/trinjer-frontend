import {TokenLoadAction} from './token-load.action';

export const UserActionType = {
	TOKEN_LOADED: '[token] loaded',
	LOGOUT: '[token] delete'
};

export type AllUserActions = TokenLoadAction;
