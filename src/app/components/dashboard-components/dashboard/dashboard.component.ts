import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() {
        console.log('Module Loaded')
     }

    ngOnInit(): void {

    }

    public barChartLegend = true;
    public barChartPlugins = [];

    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['UT1', 'UT2', 'MID-TERM', 'UT3', 'UT4', 'FINAL-TERM'],
        datasets: [
            { data: [20, 21, 79, 17, 16, 75], label: 'Marks Obtained ' },
            { data: [65, 19, 85, 11, 20, 85], label: 'Class Average' },
            { data: [25, 25, 100, 25, 25, 100], label: 'Total Marks' },
        ]
    };

    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
        responsive: false,
    };


    public doughnutChartLabels: string[] = ['Present', 'absent', 'leave'];
    public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
        { data: [65, 25, 10], label: 'Series A' },
    ];

    public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
        responsive: false
    };



}
