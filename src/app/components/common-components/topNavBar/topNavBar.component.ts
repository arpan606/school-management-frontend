import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { StoreStateService } from '../../../services/store-state.service';


@Component({
    selector: 'app-topNavBar',
    templateUrl: './topNavBar.component.html',
    styleUrls: ['./topNavBar.component.scss']
})
export class TopNavBarComponent implements OnInit {

    profileImage!: string;

    constructor(private authService: AuthService, private storeStateService: StoreStateService) { }

    ngOnInit(): void {
        this.profileImage = this.storeStateService.profilePicture$.value;
    }

    logoutUser() {
        window.location.reload();
        this.authService.userLoggedOut();
        localStorage.clear();
    }


}
