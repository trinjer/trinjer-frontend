import {NgModule} from '@angular/core';
import {MdButtonModule, MdSidenavModule, MdToolbarModule} from '@angular/material';


@NgModule({
	imports: [
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule
	],
	exports: [
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule
	],
	declarations: [],
	providers: [],
})
export class AngularMaterialModule {
}
