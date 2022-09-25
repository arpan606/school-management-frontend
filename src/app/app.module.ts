import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SideNavBarComponent } from './components/sideNavBar/sideNavBar.componet';
import { TopNavBarComponent } from './components/topNavBar/topNavBar.component';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { GradesComponent } from './components/grades/grades.component';
import { AccountComponent } from './components/accounts/accounts.component';
import { ChatsComponent } from './components/chats/chats.component';
import { FormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
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
