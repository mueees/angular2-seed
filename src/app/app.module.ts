import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
// Modules
import {AppRoutingModule} from "./app.routing";
import {HomeModule} from "./home/home.module";
// Components
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,

        AppRoutingModule,
        HomeModule
    ],

    providers: [],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}