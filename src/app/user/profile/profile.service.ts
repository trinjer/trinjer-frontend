import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {HttpConfig} from '../../http.config';
import {MapperFactory} from '../../serialize-extensions/mapper.factory';

@Injectable()
export class ProfileService {

	constructor(private http: Http) {
	}

	loadUserInfo(userId: number): Observable<UserModel> {
		const params: RequestOptionsArgs = {search: {userId}};
		return this.http.get(HttpConfig.USER_BY_ID, params).map(MapperFactory.getFromResponse(UserModel))
	}
}
