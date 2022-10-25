import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TimeTable } from '../../../interface/time-table.interface';
import { TimeTableService } from '../../../services/time-table.service';

@Component({
    selector: 'app-time-table',
    templateUrl: './time-table.component.html',
    styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {

    timeTableArray: TimeTable[] = []

    constructor(private timeTableService: TimeTableService) { }

    ngOnInit(): void {
        this.fetchTimeTable();



    }

    fetchTimeTable() {
        this.timeTableService.getClassTimeTable().subscribe({
            next: (res) => {

                if (res.status.toUpperCase() === "SUCCESS") {

                    for (let i = 0; i < res.data.length; i += 1) {
                        const tempObj= {
                            firstPeriod: res.data[i].firstPeriod,
                            secondPeriod: res.data[i].secondPeriod,
                            thirdPeriod: res.data[i].thirdPeriod,
                            fourthPeriod: res.data[i].fourthPeriod,
                            fifthPeriod: res.data[i].fifthPeriod,
                            sixthPeriod: res.data[i].sixthPeriod,
                            seventhPeriod: res.data[i].seventhPeriod,
                            eigthPeriod: res.data[i].eigthPeriod,
                            day: res.data[i].day
                        }

                        this.timeTableArray.push(tempObj);

                    }

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
