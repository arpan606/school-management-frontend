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
export class SyllabusService {

    private classSyllabusrUrl = environment.schoolClassSyllabus;


    constructor(private httpClient: HttpClient, private storeStateService: StoreStateService) {
    }


    getclassSyllabus(): Observable<any> {
        return this.httpClient.get(this.classSyllabusrUrl, {
            params: {
                classId:this.storeStateService.classId$.value
            }
        }
        );
    }



}
