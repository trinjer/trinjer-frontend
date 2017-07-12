import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStore} from './shared/services/user.store';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		UserStore
	],
	declarations: []
})
export class UserModule {
}
