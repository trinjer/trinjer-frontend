import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../../../angular-material/angular-material.module';
import {LoginService} from './services/login.service';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
	imports: [
		CommonModule,
		AngularMaterialModule,
		ReactiveFormsModule,
		HttpModule
	],
	exports: [],
	declarations: [LoginComponent],
	providers: [LoginService],
})
export class LoginModule {
}
