import {Store} from '../../../shared/interfaces/store.interface';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from '@angular/core';

@Injectable()
export class UserStore implements Store<User | null> {
	private behaviour = new BehaviorSubject<User | null>(null);

	get(): Observable<User> {
		return this.behaviour.asObservable();
	}

	add(value: User | null): void {
		this.behaviour.next(value);
	}
}
