import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { backendHeaders, environment } from 'src/environments/environment';
import { ILoginRequest } from '../interface/auth.interface';
import { StoreStateService } from './store-state.service';

@Injectable({
    providedIn: 'root'
})
export class AnnouncementService {

    private schoolCircularUrl = environment.schoolCircular;
    

    constructor(private httpClient: HttpClient) {
    }


    getSchoolCircular(): Observable<any> {
        return this.httpClient.get(this.schoolCircularUrl, {}
        );
    }



}
