import {TokenModel} from './models/token.model';

export interface UserState {
	token: TokenModel | null;
	isLoginProcessing: boolean;
	loginError?: any;
}

export const initialState: UserState = {
	token: null,
	isLoginProcessing: false
};
