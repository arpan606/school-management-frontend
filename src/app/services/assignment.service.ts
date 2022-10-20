import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { backendHeaders, environment } from 'src/environments/environment';
import { ILoginRequest } from '../interface/auth.interface';

@Injectable({
    providedIn: 'root'
})
export class AssignmentService {

    private upcomingAssignmentUrl = environment.upcomingAssignment;
    private pendingAssignmentUrl = environment.pendingAssignment;
    private submittedAssignmentUrl = environment.submittedAssignment;


    constructor(private httpClient: HttpClient) {

    }


    getPendingAssignment(): Observable<any> {
        return this.httpClient.get(this.pendingAssignmentUrl,
            {
                headers: backendHeaders
            },
        );
    }

    getUpcomingAssignment(): Observable<any> {
        return this.httpClient.get(this.upcomingAssignmentUrl,
            {
                headers: backendHeaders
            },
        );
    }

    getSubmittedAssignment(): Observable<any> {
        return this.httpClient.get(this.submittedAssignmentUrl,
            {
                headers: backendHeaders
            },
        );
    }




}
