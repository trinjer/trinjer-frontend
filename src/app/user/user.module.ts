import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStore} from './shared/services/user.store';
import {AngularMaterialModule} from '../shared/angular-material.module';
import {LoginComponent} from './authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegistrationComponent } from './authentication/registration/registration.component';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		UserStore
	],
	declarations: [LoginComponent, RegistrationComponent]
})
export class UserModule {
}
