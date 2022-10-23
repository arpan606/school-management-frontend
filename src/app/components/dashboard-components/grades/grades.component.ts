import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { UserSubject } from '../../../interface/grades.interface';
import { IUserMarks } from '../../../interface/graph.interface';
import { UserService } from '../../../services/user.service';


@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit {

    userMarksArray: IUserMarks[] = [];
    paperTotalMarks!: UserSubject;


    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.paperTotalMarks = {
            Midterm: 100,
            Preboard1: 100,
            Preboard2: 100,
            UT1: 25,
            UT2: 25,
            UT3: 25,
            UT4: 25,
        }
        this.fetchUserMarks();

    }


    fetchUserMarks() {
        this.userService.getUserMarks().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {
                    // this.toastr.success('SUCCESS', 'LOGIN SUCCESSFULL');

                    console.log(res);

                    for (let i = 0; i < res.data.length; i += 1) {

                        let userMarks: IUserMarks = {
                            subjectName: res.data[i].name,
                            UT1: res.data[i].UT1,
                            UT2: res.data[i].UT2,
                            Midterm: res.data[i].MidTerm,
                            UT3: res.data[i].UT3,
                            UT4: res.data[i].UT4,
                            Preboard1: res.data[i].Preboard1,
                            Preboard2: res.data[i].Preboard2,
                        }

                        this.userMarksArray.push(userMarks);


                    }

                    console.log(this.userMarksArray);

                }
                else {
                    // this.toastr.error("FAILURE", 'INVALID REQUEST');
                }
            },
            error: (error) => {
                console.error("Error =>", error);
                // this.toastr.error('ERROR', 'SERVER OFFLINE');
            }
        });
    }



}
