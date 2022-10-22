import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { backendHeaders, environment } from 'src/environments/environment';
import { ILoginRequest } from '../interface/auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    isUserLoggedIn$$ = new BehaviorSubject<boolean>(false);
    isUserLoggedIn$ = this.isUserLoggedIn$$.asObservable();


    private authLoginUrl = environment.authLogin;

    constructor(private httpClient: HttpClient) { 

    }


    login(loginCredentials: ILoginRequest): Observable<any> {
        return this.httpClient.post(this.authLoginUrl,

            {
                userId: loginCredentials.userId,
                schoolId: loginCredentials.schoolId,
                password: loginCredentials.password

            },
            {
                headers: backendHeaders
            }

        );
    }

    userLoggedIn() {
        this.isUserLoggedIn$$.next(true);
    }

    userLoggedOut() {
        this.isUserLoggedIn$$.next(false);
    }



}
