import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';
// Components
import { HomeComponent } from './component/home/home.component';
import { ActionsModule } from './actions/actions.module';
import { InputFieldComponent } from './component/input-field/input-field.component';

const upgradeProviders = window.upgrade.factories.map((factory) => {
    return {
        provide: factory.name,
        useFactory: function ($injector: any) {
            return $injector.get(factory.name);
        },
        deps: ['$injector']
    }
});

@NgModule({
    imports: [
        FormsModule,
        ActionsModule,
        UpgradeModule,
        BrowserModule
    ],
    declarations: [
        InputFieldComponent,
        HomeComponent
    ],
    entryComponents: [
        InputFieldComponent,
        HomeComponent
    ],
    providers: [
        ...upgradeProviders
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule, private injector: Injector) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ['angular1'], {});

        const globalCache = this.upgrade.injector.get('globalCache');

        globalCache.getRecords();
    }
}