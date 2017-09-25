import {Injectable} from '@angular/core';
import {LoginService} from './authentication/login/services/login.service';
import {Actions, Effect} from '@ngrx/effects';
import {UserActionType} from './actions/types';
import {LoginAction} from './actions/login.action';
import 'rxjs/add/operator/exhaustMap';
import {LoginSuccessAction} from './actions/login-success.action';
import {LoginFailedAction} from './actions/login-failed.action';
import {of} from 'rxjs/observable/of';

@Injectable()
export class UserEffects {
	@Effect()
	login = this.actions.ofType(UserActionType.LOGIN)
		.map((action: LoginAction) => action.payload)
		.exhaustMap(credentials => this.loginService.login(credentials))
		.map(token => new LoginSuccessAction(token))
		.catch(error => of(new LoginFailedAction(error)));

	constructor(private loginService: LoginService, private actions: Actions) {
	}
}
