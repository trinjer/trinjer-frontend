import {NgModule} from '@angular/core';

import {RegistrationComponent} from './registration.component';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../../../angular-material/angular-material.module';

@NgModule({
	imports: [CommonModule, AngularMaterialModule],
	exports: [],
	declarations: [RegistrationComponent],
	providers: [],
})
export class RegistrationModule {
}
