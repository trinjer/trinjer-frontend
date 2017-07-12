import {Observable} from 'rxjs/Observable';

export interface Store<T> {
	get(): Observable<T>;
	add(value: T): void;
}
