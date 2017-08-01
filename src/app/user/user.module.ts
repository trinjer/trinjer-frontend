import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStore} from './shared/services/user.store';
import {AngularMaterialModule} from '../shared/angular-material.module';
import {LoginComponent} from './authentication/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
	declarations: [LoginComponent]
})
export class UserModule {
}
