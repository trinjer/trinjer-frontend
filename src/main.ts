import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {EnvironmentType} from './environments/type';

if (environment.type === EnvironmentType.PROD) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
