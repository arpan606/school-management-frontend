import { Component, OnInit } from '@angular/core';
import { IPendingAssigment } from '../../../interface/assignment.interface';
import { AssignmentService } from '../../../services/assignment.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {


    pendingAssignmentArray: IPendingAssigment[] = [];


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

                        //converting timestamp to date
                        let { submissionDate } = res.data[i];
                        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        var lastDate = new Date(submissionDate);

                   
                        let assignment: IPendingAssigment = {
                            pdfLink: res.data[i].pdfLink,
                            submissionDate: lastDate.toString(),
                            title: res.data[i].title,
                            totalMarks: res.data[i].totalMarks,
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

                    console.log(res);



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
