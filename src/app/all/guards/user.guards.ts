import { Injectable } from '@angular/core';
import { CanActivate, Router, Route } from '@angular/router';
import { UserService } from '../../services/user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) {}

    private isLoggedIn(): boolean {
        // we are returning a simple boolean value, but it can be also a Promise that resolves to a boolean value
        const isLoggedIn = this.userService.isLoggedIn();
        if (!isLoggedIn) {
            this.router.navigate(['/login'])
        }
        return isLoggedIn;
    }

    canActivate(): boolean {
        return this.isLoggedIn()
    }
    canLoad(): boolean {
        return this.isLoggedIn()
    }
}
