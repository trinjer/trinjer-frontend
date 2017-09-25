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
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './user/user.effects';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		BrowserAnimationsModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([UserEffects]),

		// Custom modules
		UserModule,
		AngularMaterialModule,
		CoreModule,

		AppRoutingModule
	],
	providers: [
		UserEffects
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
