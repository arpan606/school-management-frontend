import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { StoreStateService } from '../services/store-state.service';



@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {

    constructor(private router: Router,
        private storeStateService: StoreStateService, private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

        console.log('Activating');

        if (!String(localStorage.getItem("email")) || !String(localStorage.getItem("jwtToken")) || !String(localStorage.getItem("classId"))) {
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

        return true;
    }


}
