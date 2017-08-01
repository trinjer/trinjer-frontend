import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStore} from './shared/services/user.store';
import {AngularMaterialModule} from "../shared/angular-material.module";

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule
	],
	providers: [
		UserStore
	],
	declarations: []
})
export class UserModule {
}
