import {Injectable} from '@angular/core';

import {SessionService} from './session.service';

@Injectable()
export class AuthenticationService {
    constructor(private sessionService: SessionService) {

    }

    login(strategy: string) {

    }

    logout() {

    }

    isLoggedIn() {

    }

    initSession() {

    }
}