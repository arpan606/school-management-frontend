import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TimeTable } from '../../../interface/time-table.interface';
import { TimeTableService } from '../../../services/time-table.service';

@Component({
    selector: 'app-schedules',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

    todayTimeTable!: any;

    constructor(private timeTableService: TimeTableService) { }


    ngOnInit(): void {

        this.fetchTodayTimeTable();
    }

    fetchTodayTimeTable() {
        this.timeTableService.getTodayClassTimeTable().subscribe({
            next: (res) => {
                if (res.status.toUpperCase() === "SUCCESS") {
                    this.todayTimeTable = {
                        firstPeriod: res.data.firstPeriod,
                        secondPeriod: res.data.secondPeriod,
                        thirdPeriod: res.data.thirdPeriod,
                        fourthPeriod: res.data.fourthPeriod,
                        fifthPeriod: res.data.fifthPeriod,
                        sixthPeriod: res.data.sixthPeriod,
                        seventhPeriod: res.data.seventhPeriod,
                        eigthPeriod: res.data.eigthPeriod,
                    }

                }
                else {

                    this.todayTimeTable = {};
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
