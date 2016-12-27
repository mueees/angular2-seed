import {Injectable} from '@angular/core';

@Injectable()
export class User {
    email: string;

    constructor(userData?: any) {
        this.email = userData && userData.email;
    }
}