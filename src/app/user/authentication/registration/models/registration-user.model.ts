import {UserModel} from '../../../models/user.model';
import {Field} from 'serialize-ts';

export class RegistrationUserModel extends UserModel {
	@Field() password: string;
}
