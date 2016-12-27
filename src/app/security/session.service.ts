import {Injectable} from '@angular/core';

import {User} from './user.model';

@Injectable()
export class SessionService {
    currentUser: User;

    create(userData: any): void {
        this.currentUser = new User(userData);
    }

    get(): User {
        return this.currentUser;
    }
}