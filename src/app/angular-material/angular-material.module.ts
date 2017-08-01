import {NgModule} from '@angular/core';
import {MdButtonModule, MdInputModule, MdSidenavModule, MdToolbarModule} from '@angular/material';


@NgModule({
	imports: [
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule,
		MdInputModule
	],
	exports: [
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule,
		MdInputModule
	],
	declarations: [],
	providers: [],
})
export class AngularMaterialModule {
}
