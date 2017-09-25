import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {ProfileService} from './profile.service';

@NgModule({
	imports: [
		CommonModule,
		HttpModule
	],
	providers: [ProfileService],
	declarations: []
})
export class ProfileModule {
}
