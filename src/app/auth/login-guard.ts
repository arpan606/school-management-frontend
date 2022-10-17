import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StoreStateService } from '../services/store-state.service';



@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

    constructor(private router: Router,
        private storeStateService: StoreStateService, private authService: AuthService) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log('canLOad calling');

        if (String(localStorage.getItem("email")) && String(localStorage.getItem("jwtToken")) && String(localStorage.getItem("classId"))) {

            console.log('canLOad')
            this.authService.userLoggedIn();
            return true;

        } else {

            console.log('no canLOad')
            // this.loginService.userLoggedOut();  logging out
            // this.storeStateService.clearState(); clearing local storage

            //set User Logged Out to true; 
            this.authService.userLoggedOut();
            this.storeStateService.clearLocalStorage();

            console.log('Clearing Local Storage');
            localStorage.clear();


            let url = '';
            segments.forEach((segment: UrlSegment) => {
                url += segment.path + '/'
            })


            // navigating to login page
            this.router.navigate([`/`], { queryParams: { source: url } });
            return false;


        }

    }








    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log('Activating');

        if (String(localStorage.getItem("email")) && String(localStorage.getItem("jwtToken")) && String(localStorage.getItem("classId"))) {

            console.log('versipmkjsndkjskj');

            this.authService.userLoggedIn();
            return true;

        } else {
            console.log('not csjb');


            // this.loginService.userLoggedOut();  logging out
            // this.storeStateService.clearState(); clearing local storage

            //set User Logged Out to true; 
            this.authService.userLoggedOut();
            this.storeStateService.clearLocalStorage();

            console.log('Clearing Local Storage');
            localStorage.clear();


            let url = '';
            route.url.forEach((segment: UrlSegment) => {
                url += segment.path + '/'
            })


            // navigating to login page
            this.router.navigate([`/`], { queryParams: { source: url } });
            return false;


        }

        return false;
    }





}
