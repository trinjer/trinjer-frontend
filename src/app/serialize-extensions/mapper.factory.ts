import {deserialize, Type} from 'serialize-ts';
import {Response} from '@angular/http';

export class MapperFactory {
	static getFromResponse<T>(type: Type<T>): (response: Response) => T {
		return response => deserialize(response.json(), type);
	}
}
