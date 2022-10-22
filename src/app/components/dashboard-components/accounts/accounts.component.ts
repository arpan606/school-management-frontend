import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { StoreStateService } from '../../../services/store-state.service';


@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

    firstName!: string;
    lastName!: string;
    email!: string;
    classId!: string;
    phoneNumber!: number;
    userId!: string;
    profilePictureLink!:string;

    constructor(private storeStateService: StoreStateService) { }

    ngOnInit(): void {
        this.firstName = this.storeStateService.firstName$.value;
        this.lastName = this.storeStateService.lastName$.value;
        this.email = this.storeStateService.email$.value;
        this.userId = this.storeStateService.studentId$.value;
        this.phoneNumber = this.storeStateService.phoneNumber$.value;
        this.classId = this.storeStateService.classId$.value;
        this.profilePictureLink=this.storeStateService.profilePicture$.value;

    }





}
