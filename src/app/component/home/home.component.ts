import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    @Input() configuration: any;

    constructor(@Inject('$rootScope') public $rootScope: any) {
    }

    ngOnInit() {
        console.log(this.configuration);

        this.$rootScope.$broadcast('propertyChanged', {
            component: 'home'
        });
    }
}