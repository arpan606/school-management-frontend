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
export class UserService {

    private userMarksUrl = environment.userMarks;
    private userMarksPercentageUrl = environment.userMarksPercentage;
    private userAttendanceUrl = environment.userAttendance;

    constructor(private httpClient: HttpClient, private storeStateService: StoreStateService) {
    }


    getUserMarks(): Observable<any> {
        return this.httpClient.get(this.userMarksUrl,
            {
                params: {
                    studentId: this.storeStateService.studentId$.value
                }
            }
        );
    }

    getUserAverageMarks(): Observable<any> {
        return this.httpClient.get(this.userMarksPercentageUrl,
            {
                params: {
                    studentId: this.storeStateService.studentId$.value
                }
            }
        );
    }


    getUserAttendance(): Observable<any> {
        return this.httpClient.get(this.userAttendanceUrl,
            {
                params: {
                    studentId: this.storeStateService.studentId$.value
                }
            }
        );
    }






}
