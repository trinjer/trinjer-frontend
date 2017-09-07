import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import {ErrorFactory} from './error.factory';

export function errorHandler(error: Response): Observable<any> {
	return ErrorObservable.create(ErrorFactory.getErrorByCode(error.status));
}
