import {Injectable} from '@angular/core';
import {TokenModel} from '../../../models/token.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/add/operator/mergeMap';
import {RegistrationUserModel} from '../models/registration-user.model';
import {Http} from '@angular/http';
import {HttpConfig} from '../../http.config';
import {serialize} from 'serialize-ts';
import {LoginService} from '../../login/services/login.service';

@Injectable()
export class RegistrationService {

	constructor(private http: Http, private loginService: LoginService) {
	}

	register(user: RegistrationUserModel): Observable<TokenModel> {
		return this.http.post(HttpConfig.REGISTRATION, serialize(user))
			.flatMap(() => this.loginService.login({email: user.email, password: user.password}));
	}
}
