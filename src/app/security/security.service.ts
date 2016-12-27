import {Injectable} from '@angular/core';

@Injectable()
export class Security {
    createDate: Date;

    constructor() {
        this.createDate = new Date();
    }
}