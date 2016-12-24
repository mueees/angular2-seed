import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
// Modules
import {AppComponent} from "./app.component";

@NgModule({
    imports: [
        BrowserModule
    ],

    providers: [],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}