import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';
import { HomeComponent } from './component/home/home.component';
import { ActionRegistry } from './actions/action-registry.service';
import { InputFieldComponent } from './component/input-field/input-field.component';

declare let angular: any;

angular.module('angular1')
    .directive(
        'home',
        downgradeComponent({component: HomeComponent})
    )
    .directive(
        'inputFieldComponent',
        downgradeComponent({component: InputFieldComponent})
    )
    .factory('actionRegistry', downgradeInjectable(ActionRegistry));