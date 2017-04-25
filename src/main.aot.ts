import {platformBrowser} from "@angular/platform-browser";
import {enableProdMode} from "@angular/core";
import {AppModuleNgFactory} from "./ngfactory/src/app/app.module.ngfactory";

import "./assets/scss/index.scss";

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);