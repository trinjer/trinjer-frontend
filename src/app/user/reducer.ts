import {initialState, UserState} from './state';
import {AllUserActions, UserActionType} from './actions/types';
import {ActionReducerMap} from '@ngrx/store';

export interface State {
	user: UserState
}

export function reducer(state: UserState  = initialState, action: AllUserActions): UserState {
	switch (action.type) {
		case UserActionType.TOKEN_LOADED:
			return {...state, token: action.payload, isLoginProcessing: false};
		case UserActionType.LOGIN:
			return {...state, isLoginProcessing: true};
		case UserActionType.LOGIN_FAILED:
			return {...state, isLoginProcessing: false, loginError: action.payload};
		default:
			return state;
	}
}

export const reducers: ActionReducerMap<State, AllUserActions> = {
	user: reducer
};
