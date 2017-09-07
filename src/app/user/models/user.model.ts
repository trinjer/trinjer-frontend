import {Field} from 'serialize-ts';

export class UserModel {
	@Field() firstName: string;
	@Field() lastName: string;
	@Field() email: string;
}
