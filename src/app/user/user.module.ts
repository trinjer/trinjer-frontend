import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginModule} from './authentication/login/login.module';
import {RegistrationModule} from './authentication/registration/registration.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		LoginModule,
		RegistrationModule
	],
	providers: [
	],
	declarations: []
})
export class UserModule {
}
