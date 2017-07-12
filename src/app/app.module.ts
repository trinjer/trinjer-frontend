import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './shared/app-component/app.component';
import {AppRoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule,

		// Custom modules
		UserModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
