import { Injectable } from '@angular/core';

/*
* Service which will be downgraded and used in AngularJS
* */
@Injectable()
export class ActionRegistry {
    actions: string[] = [];

    constructor() {
        this.register('open2-action');
        this.register('close2-action');
    }

    register(name: string) {
        this.actions.push(name);
    }

    get () {
        return this.actions;
    }
}