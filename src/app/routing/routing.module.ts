import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {LoginComponent} from '../user/authentication/login/login.component';
import {RegistrationComponent} from '../user/authentication/registration/registration.component';

const routes: Array<Route> = [
	{path: 'login', component: LoginComponent},
	{path: 'registration', component: RegistrationComponent},
	{path: '', redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule {
}
