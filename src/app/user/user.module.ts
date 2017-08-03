import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStore} from './shared/services/user.store';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from './authentication/login/login.module';
import {RegistrationModule} from './authentication/registration/registration.module';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		FormsModule,
		ReactiveFormsModule,
		LoginModule,
		RegistrationModule
	],
	providers: [
		UserStore
	],
	declarations: []
})
export class UserModule {
}
