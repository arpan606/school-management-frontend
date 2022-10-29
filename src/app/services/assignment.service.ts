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
export class AssignmentService {

    private upcomingAssignmentUrl = environment.upcomingAssignment;
    private pendingAssignmentUrl = environment.pendingAssignment;
    private submittedAssignmentUrl = environment.submittedAssignment;


    constructor(private httpClient: HttpClient, private storeStateService: StoreStateService) {

    }


    getPendingAssignment(): Observable<any> {
        return this.httpClient.get(this.pendingAssignmentUrl,
            {
                params: {
                    studentId: this.storeStateService.studentId$.value
                },
                headers: backendHeaders
            },
        );
    }

    getUpcomingAssignment(): Observable<any> {
        return this.httpClient.get(this.upcomingAssignmentUrl,
            {
                params: {
                    classId: this.storeStateService.classId$.value
                },
                headers: backendHeaders
            },
        );
    }

    getSubmittedAssignment(): Observable<any> {
        return this.httpClient.get(this.submittedAssignmentUrl,
            {
                params: {
                    studentId: this.storeStateService.studentId$.value
                },
                headers: backendHeaders
            },
        );
    }




}
