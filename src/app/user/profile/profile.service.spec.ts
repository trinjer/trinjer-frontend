import {inject, TestBed} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {UserModel} from '../models/user.model';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Http} from '@angular/http';

const expectedUserInfo = new UserModel();
expectedUserInfo.email = 'test@email.com';
expectedUserInfo.firstName = 'test first name';
expectedUserInfo.lastName = 'test last name';

class MockHttp {
	get (): Observable<UserModel> {
		return of(expectedUserInfo);
	}
}

describe('ProfileService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ProfileService]
		});
	});

	it('should be created', inject([ProfileService], (service: ProfileService) => {
		expect(service).toBeDefined();
	}));

	it('should load user info by user id via http', inject(
		[ProfileService, Http], (service: ProfileService, http: MockHttp) => {
			spyOn(http, 'get').and.callThrough();
			const userId = 12;
			service.loadUserInfo(userId).subscribe(userInfo => expect(userInfo).toEqual(expectedUserInfo));
			expect(http.get).toHaveBeenCalledTimes(1);
		}));
});
