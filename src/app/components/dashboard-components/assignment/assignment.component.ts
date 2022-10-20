import { Component, OnInit } from '@angular/core';
import { AssignmentService } from '../../../services/assignment.service';

@Component({
    selector: 'app-assignment',
    templateUrl: './assignment.component.html',
    styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

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
                    // this.customer = customerDetails;
                    // this.toastr.success(TOASTR_MSG.VALID_CUSTOMER, TOASTR_TITLE.SUCCESS);

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

                    console.log(res);
                    // this.customer = customerDetails;
                    // this.toastr.success(TOASTR_MSG.VALID_CUSTOMER, TOASTR_TITLE.SUCCESS);

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
                    // this.customer = customerDetails;
                    // this.toastr.success(TOASTR_MSG.VALID_CUSTOMER, TOASTR_TITLE.SUCCESS);

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
