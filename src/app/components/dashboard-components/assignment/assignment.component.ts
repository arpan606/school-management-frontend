import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IPendingAssigment, ISubmittedAssigment, IUpcomingAssigment } from '../../../interface/assignment.interface';
import { AssignmentService } from '../../../services/assignment.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {


    pendingAssignmentArray: IPendingAssigment[] = [];
    submittedAssignmentArray: ISubmittedAssigment[] = [];
    upcomingAssignmentArray: IUpcomingAssigment[] = [];


    constructor(private assignmentService: AssignmentService, private toastr: ToastrService) { }



    ngOnInit(): void {

        this.upcomingAssignment();
        this.pendingAssignment();
        this.submittedAssignment();
    }

    //FETCH USER UPCOMING ASSIGNMENT
    upcomingAssignment() {

        this.assignmentService.getUpcomingAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

                    // this.toastr.success('SUCCESS', 'SUCCESSFULLY FETCHED UPCOMING ASSIGNMENT');

                    for (let i = 0; i < res.data.length; i += 1) {

                        let { submissionDate } = res.data[i];
                        const splitDate = submissionDate.split('T');

                        const assignment: IUpcomingAssigment = {
                            pdfLink: res.data[i].pdfLink,
                            submissionDate: splitDate[0],
                            title: res.data[i].title,
                            totalMarks: res.data[i].totalMarks,
                            classId: res.data[i].classId
                        }

                        this.upcomingAssignmentArray.push(assignment);
                    }

                }
                else {
                    // this.toastr.warning('FAILURE', 'INVALID REQUEST');
                    this.upcomingAssignmentArray = [];
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                this.toastr.error('ERROR', 'SERVER OFFLINE');
            },
        });

    }

    //FETCH USER PENDING ASSIGNMENT
    pendingAssignment() {

        this.assignmentService.getPendingAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

                    // this.toastr.success('SUCCESS', 'SUCCESSFULLY FETCHED PENDING ASSIGNMENT');

                    for (let i = 0; i < res.data.length; i += 1) {

                        let { submissionDate } = res.data[i];
                        const splitDate = submissionDate.split('T');

                        let assignment: IPendingAssigment = {
                            pdfLink: res.data[i].pdfLink,
                            submissionDate: splitDate[0],
                            title: res.data[i].title,
                            totalMarks: res.data[i].totalMarks,
                            classId: res.data[i].classId
                        }

                        this.pendingAssignmentArray.push(assignment);
                    }

                }
                else {
                    // this.toastr.warning('FAILURE', 'INVALID REQUEST');
                    this.pendingAssignmentArray = [];
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                this.toastr.error('ERROR', 'SERVER OFFLINE');

            },
        });

    }

    //FETCH USER SUBMITTED ASSIGNMENT
    submittedAssignment() {

        this.assignmentService.getSubmittedAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

                    // this.toastr.success('SUCCESS', 'SUCCESSFULLY FETCHED SUBMITTED ASSIGNMENT');


                    for (let i = 0; i < res.data.length; i += 1) {
                        const assignment: ISubmittedAssigment = {
                            title: res.data[i].title,
                            teacherName: res.data[i].teacherName,
                            teacherImageLink: res.data[i].teacherImageLink,
                            subject: res.data[i].subject,
                            status: res.data[i].status,
                            marksObtained: res.data[i].marksObtained
                        }

                        this.submittedAssignmentArray.push(assignment);
                    }

                }
                else {
                    // this.toastr.warning('FAILURE', 'INVALID REQUEST');
                    this.submittedAssignmentArray = [];
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                this.toastr.error('ERROR', 'SERVER OFFLINE');
            },
        });

    }






}
