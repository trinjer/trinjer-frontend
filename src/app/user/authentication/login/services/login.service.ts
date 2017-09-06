import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {HttpConfig} from '../../http.config';
import {Credentials} from '../models/credentials.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {ErrorFactory} from '../errors/error.factory';
import {TokenModel} from '../models/token.model';
import {MapperFactory} from '../../../../serialize-extensions/mapper.factory';

@Injectable()
export class LoginService {

	constructor(private http: Http) {
	}

	login(credentials: Credentials): Observable<TokenModel> {
		const errorHandler = (e: Response) => ErrorObservable.create(ErrorFactory.getErrorByCode(e.status));

		return this.http.post(HttpConfig.LOGIN, credentials)
			.map(MapperFactory.getFromResponse(TokenModel))
			.catch(errorHandler);
	}
}
