import { Component, OnInit } from '@angular/core';
import { ILoginRequest, IUserData } from '../../../interface/auth.interface';
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { StoreStateService } from '../../../services/store-state.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page404',
    templateUrl: './page404.component.html',
    styleUrls: ['./page404.component.scss']
})
export class Page404Component implements OnInit {


    constructor(private router: Router) { }

    ngOnInit(): void {

      

    }

    returnToDashboard(){
        this.router.navigate(['./dashboard/home']);
    }

 




    



}
