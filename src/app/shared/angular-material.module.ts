import {NgModule} from '@angular/core';
import {MdSidenavModule, MdToolbarModule} from "@angular/material";


@NgModule({
	imports: [
		MdToolbarModule,
		MdSidenavModule
	],
	exports: [
		MdToolbarModule,
		MdSidenavModule
	],
	declarations: [],
	providers: [],
})
export class AngularMaterialModule {
}
