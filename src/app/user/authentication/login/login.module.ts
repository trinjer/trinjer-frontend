import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../../../angular-material/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule],
	exports: [],
	declarations: [LoginComponent],
	providers: [],
})
export class LoginModule {
}
