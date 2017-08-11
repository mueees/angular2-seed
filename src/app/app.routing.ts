import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { forumRoutes } from './features/forum';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forum',
        children: forumRoutes
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // handle all [unmatched] routes
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}