import {platformBrowser} from "@angular/platform-browser";
import {AppModuleNgFactory} from "./ngfactory/src/app/app.module.ngfactory";

import "./assets/scss/index.scss";

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);