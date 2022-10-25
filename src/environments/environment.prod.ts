import { HttpHeaders } from "@angular/common/http";


const schoolManagementServerUrl: string = 'http://localhost:5000/'

export const environment = {
    production: true,
      //AUTH
      authLogin: schoolManagementServerUrl + 'auth/login',
      //ASSIGNMENT
      upcomingAssignment: schoolManagementServerUrl + 'assignment/upcoming',
      pendingAssignment: schoolManagementServerUrl + 'assignment/pending',
      submittedAssignment: schoolManagementServerUrl + 'assignment/submitted',
};


export const backendHeaders = new HttpHeaders({

});
