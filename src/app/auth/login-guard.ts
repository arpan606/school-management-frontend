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
        console.log('Loaded');

        if (localStorage.getItem('classId')) {
            this.authService.userLoggedIn();
            return true;

        } else {

            this.authService.userLoggedOut();
            this.storeStateService.clearLocalStorage();

            localStorage.clear();

            let url = '';
            segments.forEach((segment: UrlSegment) => {
                url += segment.path + '/'
            })

            this.router.navigate([``]);
            return false;
        }

    }


    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

            console.log('Activate');

        if (!this.storeStateService.classId$.value) {

            this.authService.userLoggedIn();
            return true;

        } else {

            this.authService.userLoggedOut();
            this.storeStateService.clearLocalStorage();

            localStorage.clear();


            let url = '';
            route.url.forEach((segment: UrlSegment) => {
                url += segment.path + '/'
            })


            this.router.navigate([``], { queryParams: { source: url } });
            return false;


        }

        return false;
    }





}
