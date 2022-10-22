import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IUserData } from '../interface/auth.interface';


@Injectable({
    providedIn: 'root'
})
export class StoreStateService {

    public firstName$!: BehaviorSubject<string>;
    public lastName$!: BehaviorSubject<string>;
    public birthDate$!: BehaviorSubject<string>;
    public phoneNumber$!: BehaviorSubject<number>;
    public classId$!: BehaviorSubject<string>;
    public profilePicture$!: BehaviorSubject<string>;
    public email$!: BehaviorSubject<string>;
    public jwtTokenState$!: BehaviorSubject<string>;
    public studentId$!: BehaviorSubject<string>;


    constructor(private httpClient: HttpClient) {

        let firstName = String(localStorage.getItem("firstName"));
        let lastName = String(localStorage.getItem("lastName"));
        let birthDate = String(localStorage.getItem("birthDate"));
        let phoneNumber = Number(localStorage.getItem("phoneNumber"));
        let classId = String(localStorage.getItem("classId"));
        let profilePicture = String(localStorage.getItem("profilePicture"));
        let email = String(localStorage.getItem("email"));
        let jwtToken = String(localStorage.getItem("jwtToken"));
        let studentId = String(localStorage.getItem("studentId"));


        this.firstName$ = new BehaviorSubject<string>(firstName);
        this.lastName$ = new BehaviorSubject<string>(lastName);
        this.birthDate$ = new BehaviorSubject<string>(birthDate);
        this.phoneNumber$ = new BehaviorSubject<number>(phoneNumber);
        this.classId$ = new BehaviorSubject<string>(classId);
        this.profilePicture$ = new BehaviorSubject<string>(profilePicture);
        this.email$ = new BehaviorSubject<string>(email);
        this.jwtTokenState$ = new BehaviorSubject<string>(jwtToken);
        this.studentId$ = new BehaviorSubject<string>(studentId);

    }

    setUserDataToLocalStorage(userData: IUserData) {
        this.setUserData(userData);
        console.log(userData.birthDate);
        localStorage.setItem("firstName", userData.firstName);
        localStorage.setItem("lastName", userData.lastName);
        localStorage.setItem("birthDate", String(userData.birthDate));
        localStorage.setItem("phoneNumber", String(userData.phoneNumber));
        localStorage.setItem("email", userData.email);
        localStorage.setItem("classId", userData.classId);
        localStorage.setItem("profilePicture", userData.profilePicture);
        localStorage.setItem("jwtToken", userData.jwtToken);
        localStorage.setItem("studentId", String(userData.studentId));
    }

    setUserData(userData: IUserData) {
        this.firstName$ = new BehaviorSubject<string>(userData.firstName);
        this.lastName$ = new BehaviorSubject<string>(userData.lastName);
        this.birthDate$ = new BehaviorSubject<string>(userData.birthDate);
        this.phoneNumber$ = new BehaviorSubject<number>(userData.phoneNumber);
        this.classId$ = new BehaviorSubject<string>(userData.classId);
        this.profilePicture$ = new BehaviorSubject<string>(userData.profilePicture);
        this.email$ = new BehaviorSubject<string>(userData.email);
        this.jwtTokenState$ = new BehaviorSubject<string>(userData.jwtToken);
        this.studentId$ = new BehaviorSubject<string>(String(userData.studentId));
    }


    clearLocalStorage() {
        localStorage.clear();
    }






}
