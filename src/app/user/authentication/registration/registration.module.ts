import {NgModule} from '@angular/core';

import {RegistrationComponent} from './registration.component';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../../../angular-material/angular-material.module';
import {RegistrationService} from './services/registration.service';
import {HttpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		HttpModule,
		ReactiveFormsModule,

		AngularMaterialModule
	],
	exports: [],
	declarations: [RegistrationComponent],
	providers: [RegistrationService],
})
export class RegistrationModule {
}
