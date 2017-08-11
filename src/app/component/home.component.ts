import { Component, Input, OnInit } from '@angular/core';
import angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
    @Input() configuration;

    ngOnInit() {
        console.log(this.configuration);
    }
}

angular.module('angular1')
    .directive(
        'home',
        downgradeComponent({component: HomeComponent}) as angular.IDirectiveFactory
    );