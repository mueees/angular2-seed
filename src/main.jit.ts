import 'angular';
import './app/angular-1/app.js';

import './app/downgrade';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import './assets/scss/index.scss';

platformBrowserDynamic().bootstrapModule(AppModule);