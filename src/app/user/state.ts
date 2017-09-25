import {TokenModel} from './models/token.model';

export interface UserState {
	token: TokenModel | null;
}

export const initialState: UserState = {
	token: null
};
