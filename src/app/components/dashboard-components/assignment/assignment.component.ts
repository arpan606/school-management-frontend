import { Component, OnInit } from '@angular/core';
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


    constructor(private assignmentService: AssignmentService) { }



    ngOnInit(): void {

        this.upcomingAssignment();
        this.pendingAssignment();
        this.submittedAssignment();
    }


    upcomingAssignment() {

        this.assignmentService.getUpcomingAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

                    console.log(res);


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
                    // this.toastr.warning(TOASTR_MSG.INVALID_CUSTOMER, TOASTR_TITLE.FAILURE);
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                // this.toastr.error(TOASTR_MSG.UNABLE_TO_CONNECT, TOASTR_TITLE.ERROR);
            },
        });

    }

    pendingAssignment() {

        this.assignmentService.getPendingAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

                    for (let i = 0; i < res.data.length; i += 1) {

                        let { submissionDate } = res.data[i];
                        const splitDate = submissionDate.split('T');
                        console.log(splitDate)


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
                    // this.toastr.warning(TOASTR_MSG.INVALID_CUSTOMER, TOASTR_TITLE.FAILURE);
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                // this.toastr.error(TOASTR_MSG.UNABLE_TO_CONNECT, TOASTR_TITLE.ERROR);
            },
        });

    }

    submittedAssignment() {

        this.assignmentService.getSubmittedAssignment().subscribe({
            next: (res) => {

                if (res.status == "SUCCESS") {

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
                    // this.toastr.warning(TOASTR_MSG.INVALID_CUSTOMER, TOASTR_TITLE.FAILURE);
                }

            },
            error: (error: any) => {
                console.error("Error =>", error);
                // this.toastr.error(TOASTR_MSG.UNABLE_TO_CONNECT, TOASTR_TITLE.ERROR);
            },
        });

    }






}
