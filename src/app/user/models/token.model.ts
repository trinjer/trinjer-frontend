import {Field, Model} from 'serialize-ts';

@Model()
export class TokenModel {
	@Field({name: 'jwtToken'})
	token: string;
	@Field()
	userId: number;
}
