import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '../home/login/login.component';
import { TopNavBarComponent } from '../common-components/topNavBar/topNavBar.component';
import { SideNavBarComponent } from '../common-components/sideNavBar/sideNavBar.componet';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SyllabusComponent } from '../syllabus/syllabus.component';
import { GradesComponent } from './grades/grades.component';
import { AccountComponent } from './accounts/accounts.component';
import { ChatsComponent } from './chats/chats.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    declarations: [
        TopNavBarComponent,
        SideNavBarComponent,
        DashboardComponent,
        AnnouncementComponent,
        ScheduleComponent,
        AssignmentComponent,
        SyllabusComponent,
        GradesComponent,
        AccountComponent,
        ChatsComponent,
    ],
    imports: [
        BrowserModule,
        DashboardRoutingModule,
        NgChartsModule,
        MatIconModule,
        FormsModule,
        ToastrModule,
        HttpClientModule,
        ToastrModule.forRoot({
            timeOut: 1500,
            preventDuplicates: false,
            closeButton: true,
            progressBar: true,
            progressAnimation: 'increasing',
            tapToDismiss: true,
        }),
        ToastContainerModule,
        BrowserAnimationsModule
    ],
    providers: [],
})
export class DashboardModule { }
