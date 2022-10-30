import { HttpHeaders } from "@angular/common/http";


const schoolManagementServerUrl: string = 'https://student-dashboard.onrender.com/'

export const environment = {
    production: true,
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
