import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>

  <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About (lazy)</a>
  </nav>

    <router-outlet></router-outlet>
`
})
export class AppComponent {
    title: string = 'Angular2';
}