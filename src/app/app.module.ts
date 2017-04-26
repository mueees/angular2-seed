import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AboutModule} from "./features/about/about.module";
// Components
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {HomeComponent} from "./component/home.component";

@NgModule({
    imports: [
        BrowserModule,
        AboutModule,
        AppRoutingModule
    ],
    declarations: [
        HomeComponent,
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}