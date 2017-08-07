import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpConfig} from '../../http.config';
import {Credentials} from '../models/credentials.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {ErrorFactory} from '../errors/error.factory';

@Injectable()
export class LoginService {

	constructor(private http: Http) {
	}

	login(credentials: Credentials): Observable<void> {
		const errorHandler = (e: Response) => ErrorObservable.create(ErrorFactory.getErrorByCode(e.status));

		return this.http.post(HttpConfig.LOGIN, credentials).catch(errorHandler);
	}
}
