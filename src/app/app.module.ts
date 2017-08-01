import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './shared/app-component/app.component';
import {AppRoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {AngularMaterialModule} from './shared/angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {FooterComponent} from './shared/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		BrowserAnimationsModule,

		// Custom modules
		UserModule,
		AngularMaterialModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
