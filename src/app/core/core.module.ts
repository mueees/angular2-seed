import {NgModule, Optional, SkipSelf} from "@angular/core";

import {SecurityModule} from '../security/security.module';

@NgModule({
    imports: [
        SecurityModule
    ],

    providers: [],
    declarations: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}