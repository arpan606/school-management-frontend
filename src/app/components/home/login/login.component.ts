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

      

    }

    handleLoginRequest() {
        console.log('hello')
        console.log(this.schoolId)
        console.log(this.userId)
        console.log(this.password)

        const loginCredentials: ILoginRequest = {
            userId: this.userId,
            password: this.password,
            schoolId: this.schoolId
        };

        console.log(loginCredentials, 113);

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
                        jwtToken: res.data.token
                    }

                    this.storeStateService.setUserDataToLocalStorage(userData);
                    this.router.navigate(['./dashboard']);

                    // console.log(res, 123456);

                }
                else if (res.status == "FAILURE") {
                    // this.toastr.error("FAILURE", 'INVALID REQUEST');
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
