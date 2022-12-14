// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { HttpHeaders } from "@angular/common/http";


const schoolManagementServerUrl: string = 'http://localhost:5000/'

export const environment = {
    production: false,
    upcomingAssignment: schoolManagementServerUrl + 'assignment/upcoming',
    pendingAssignment: schoolManagementServerUrl + 'assignment/pending',
    submittedAssignment: schoolManagementServerUrl + 'assignment/submitted',
    authLogin: schoolManagementServerUrl + 'auth/login',
    userMarks: schoolManagementServerUrl + 'marks/get',
    userMarksPercentage: schoolManagementServerUrl + 'marks/performance-percentage',
    userAttendance: schoolManagementServerUrl + 'attendance/get',
    schoolCircular: schoolManagementServerUrl + 'circular/get',
    schoolClassSyllabus: schoolManagementServerUrl + 'syllabus/get',
    classTimeTable: schoolManagementServerUrl + 'time-table/get',
    classTodayTimeTable: schoolManagementServerUrl + 'time-table/get-today',

};


export const backendHeaders = new HttpHeaders({

});

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
