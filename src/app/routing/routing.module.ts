import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from '../user/authentication/login/login.component';

const routes: Array<Route> = [
	{path: 'login', component: LoginComponent},
	{path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule {
}
