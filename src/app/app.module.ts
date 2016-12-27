import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
// Modules
import {AppRoutingModule} from "./app.routing";
import {HomeModule} from "./features/home/home.module";
import {CoreModule} from "./core/core.module";
import {AppConfiguratorModule} from "./configurator/configurator.module";
// Components
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,
        AppConfiguratorModule,

        AppRoutingModule,
        HomeModule
    ],

    providers: [],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}