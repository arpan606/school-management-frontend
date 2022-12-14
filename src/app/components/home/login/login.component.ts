import { Component, OnInit } from '@angular/core';
import { ILoginRequest, IUserData } from '../../../interface/auth.interface';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StoreStateService } from '../../../services/store-state.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    schoolId!: string;
    userId!: string;
    password!: string;



    constructor(private authService: AuthService, private toastr: ToastrService, private storeStateService: StoreStateService, private router: Router) { }

    ngOnInit(): void {

        if (this.authService.isUserLoggedIn$) {
            this.router.navigate(['./dashboard/home']);
        }

    }

    handleLoginRequest() {


        const loginCredentials: ILoginRequest = {
            userId: this.userId,
            password: this.password,
            schoolId: this.schoolId
        };

        if (!this.userId || !this.password || !this.schoolId) {
            this.toastr.info("FAILURE", 'INVALID CREDENTIALS');
            return;
        }


        this.authService.login(loginCredentials).subscribe({
            next: (res) => {
                console.log(res);
                if (res.status == "SUCCESS") {
                    this.toastr.success('SUCCESS', 'LOGIN SUCCESSFULL');

                    const userData: IUserData = {
                        firstName: res.data.firstName,
                        lastName: res.data.lastName,
                        birthDate: res.data.birthdate,
                        phoneNumber: res.data.phoneNumber,
                        email: res.data.email,
                        classId: res.data.classId,
                        profilePicture: res.data.imageLink,
                        jwtToken: res.data.token,
                        studentId: loginCredentials.userId
                    }


                    this.storeStateService.setUserDataToLocalStorage(userData);
                    this.router.navigate(['./dashboard/home']);


                }
                else if (res.status == "FAILURE") {
                    this.toastr.info("FAILURE", 'INVALID CREDENTIALS');
                }
                else {
                    this.toastr.info("FAILURE", 'INVALID REQUEST');
                }
            },
            error: (error) => {
                console.error("Error =>", error);
                this.toastr.info('ERROR', 'INVALID CREDENTAILS');
            }
        });





    }

    handleGuestLogin() {

        this.userId = 'ST001';
        this.password = '11223344';
        this.schoolId = '1';

        this.handleLoginRequest();

    }



}
