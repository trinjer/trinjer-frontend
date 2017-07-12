import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';

const routes: Array<Route> = [];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule {
}
