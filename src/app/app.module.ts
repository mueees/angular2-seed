import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './features/about/about.module';
// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './component/home.component';
import { ForumModule } from './features/forum';

@NgModule({
    imports: [
        BrowserModule,
        AboutModule,
        ForumModule,
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