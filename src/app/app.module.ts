import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleComponent } from './components/dashboard-components/schedule/schedule.component';
import { AnnouncementComponent } from './components/dashboard-components/announcement/announcement.component';
import { DashboardComponent } from './components/dashboard-components/dashboard/dashboard.component';
import { SideNavBarComponent } from './components/common-components/sideNavBar/sideNavBar.componet';
import { TopNavBarComponent } from './components/common-components/topNavBar/topNavBar.component';
import { LoginComponent } from './components/home/login/login.component';
import { AssignmentComponent } from './components/dashboard-components/assignment/assignment.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { GradesComponent } from './components/dashboard-components/grades/grades.component';
import { ChatsComponent } from './components/dashboard-components/chats/chats.component';
import { AccountComponent } from './components/dashboard-components/accounts/accounts.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
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
    bootstrap: [AppComponent]
})
export class AppModule { }
