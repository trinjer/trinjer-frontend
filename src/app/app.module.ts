import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app-component/app.component';
import {AppRoutingModule} from './routing/routing.module';
import {RouterModule} from '@angular/router';
import {UserModule} from './user/user.module';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {CoreModule} from './core/core.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './user/reducer';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers),

		// Custom modules
		UserModule,
		AngularMaterialModule,
		CoreModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
