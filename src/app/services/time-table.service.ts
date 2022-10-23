import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { backendHeaders, environment } from 'src/environments/environment';
import { StoreStateService } from './store-state.service';

@Injectable({
    providedIn: 'root'
})
export class TimeTableService {

    private classTimeTableUrl = environment.classTimeTable;
    private classTodayTimeTableUrl = environment.classTodayTimeTable;



    constructor(private httpClient: HttpClient, private storeStateService: StoreStateService) {
    }


    getClassTimeTable(): Observable<any> {
        return this.httpClient.get(this.classTimeTableUrl, {
            params: {
                classId:this.storeStateService.classId$.value
            }
        }
        );
    }

    getTodayClassTimeTable(): Observable<any> {
        return this.httpClient.get(this.classTimeTableUrl, {
            params: {
                classId:this.storeStateService.classId$.value
            }
        }
        );
    }



}
