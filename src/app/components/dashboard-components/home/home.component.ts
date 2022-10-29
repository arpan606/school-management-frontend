import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Chart, ChartConfiguration } from 'chart.js';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { IUserAtttendance, IUserMarks, } from '../../../interface/graph.interface';
import { StoreStateService } from '../../../services/store-state.service';
import { UserService } from '../../../services/user.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    userMarksArray: IUserMarks[] = [];
    userAttendancePercentage!: IUserAtttendance;
    doughnutChartLabels: String[] = ['PRESENT', 'ABSENT'];
    doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [];
    doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {};
    barChartLegend = true;
    barChartPlugins = [];
    barChartData: ChartConfiguration<'bar'>['data'] = {
        datasets: []
    };
    barChartOptions: ChartConfiguration<'bar'>['options'] = {};
    subjectMarksOption!: string;



    constructor(public storeStateService: StoreStateService, private userService: UserService,private toastr: ToastrService) {

    }

    ngOnInit(): void {
        this.fetchUserMarks();
        this.fetchUserAttendance();
    }


    buildBarChart() {


        if(!this.subjectMarksOption)
        {
            this.subjectMarksOption=this.userMarksArray[0].subjectName;
        }

        let subjectMatchingIndex = 0;


        for (let i = 0; i < this.userMarksArray.length; i += 1) {
            if (this.subjectMarksOption.toUpperCase() === this.userMarksArray[i].subjectName.toUpperCase()) {
                subjectMatchingIndex = i;
                break;
            }

        }


        this.barChartData = {
            labels: ['UT1', 'UT2', 'MT', 'UT3', 'UT4', 'PB1', 'PB2'],
            datasets: [
                {
                    data: [
                    this.userMarksArray[subjectMatchingIndex].UT1,
                    this.userMarksArray[subjectMatchingIndex].UT2,
                    this.userMarksArray[subjectMatchingIndex].Midterm,
                    this.userMarksArray[subjectMatchingIndex].UT3,
                    this.userMarksArray[subjectMatchingIndex].UT4,
                    this.userMarksArray[subjectMatchingIndex].Preboard1,
                    this.userMarksArray[subjectMatchingIndex].Preboard2
                ],
                    label: `Marks Obtained ${this.userMarksArray[subjectMatchingIndex].subjectName} `
                },
                { data: [25, 25, 100, 25, 25, 100, 100], label: 'Total Marks' },
            ]
        };

        this.barChartOptions = {
            responsive: true,
        };

    }



    buildDoughnutChart() {

        this.doughnutChartDatasets = [
            {
                data: [this.userAttendancePercentage.presentPercentage, this.userAttendancePercentage.absentPercentage],
                label: 'ATTENDANCE'
            },
        ];

        this.doughnutChartOptions = {
            responsive: true
        };
    }


    fetchUserAttendance() {
        this.userService.getUserAttendance().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {
                    // this.toastr.success('SUCCESS', 'LOGIN SUCCESSFULL');

                    this.userAttendancePercentage = {
                        presentPercentage: Number(res.data.presentPercentage),
                        absentPercentage: Number(res.data.absentPercentage)
                    }

                    this.buildDoughnutChart();
                }
                else {
                    // this.toastr.error("FAILURE", 'INVALID REQUEST');
                }
            },
            error: (error) => {
                console.error("Error =>", error);
                this.toastr.error('ERROR', 'SERVER OFFLINE');
            }
        });
    }


    fetchUserMarks() {
        this.userService.getUserMarks().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {
                    // this.toastr.success('SUCCESS', 'LOGIN SUCCESSFULL');

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

                    this.buildBarChart();

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
