import { Inject, Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class UserService {
    private loggedIn: boolean;

    constructor(private http: Http, @Inject('url') private urlBase) {
        this.loggedIn = this.isLoggedIn();
    }

    login(email, password) {
        let headers: Headers;
        let options: RequestOptions;
        let body: string;
        // By default the content type is plain/text and we need to set it
        headers = new Headers({'Content-Type': 'application/json'});
        options = new RequestOptions({ headers: headers });
        body = JSON.stringify({email, password});
        return this.http.post(`${this.urlBase.fair}/login`, body, options)
            .map(res => res.json())
            .map((res) => {
                this.loggedIn = this.saveDataInLocalStorage(res.token);
                return this.loggedIn;
            })
            .catch(this.handlerError);
    }

    logout() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('expiration_date');
        localStorage.removeItem('user');
        this.loggedIn = false;
    }

    setMoreUserData(user) {
        let fullName;
        fullName = user.name.split(' ');

        user.firstName = fullName[0];
        user.lastName = fullName[1];
        return JSON.stringify(user)
    }

    isLoggedIn(): boolean {
        let isValid = false;
        const haveToken: boolean = !!localStorage.getItem('auth_token');
        if (haveToken) {
            const current_date = new Date();
            const expiration_date = new Date(localStorage.getItem('expiration_date'));
            isValid = current_date < expiration_date;
        }
        return isValid;
    }

    private saveDataInLocalStorage(token): boolean {
        const jwtHelper: JwtHelper = new JwtHelper();
        const jwtData = {
            decoded: jwtHelper.decodeToken(token),
            expiration_date: jwtHelper.getTokenExpirationDate(token),
            is_expired: jwtHelper.isTokenExpired(token)
        };
        if (!jwtData.is_expired) {
            localStorage.setItem('auth_token', token);
            localStorage.setItem('user', this.setMoreUserData(jwtData.decoded.data));
            localStorage.setItem('expiration_date', jwtData.expiration_date.toString());
        }
        return !jwtData.is_expired;
    }

    private handlerError(error: any) {
        // console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.json());
    }
}
