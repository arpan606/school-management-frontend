import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgChartsModule } from "ng2-charts";
import { SideNavBarComponent } from "../common-components/sideNavBar/sideNavBar.componet";
import { TopNavBarComponent } from "../common-components/topNavBar/topNavBar.component";
import { SyllabusComponent } from "../syllabus/syllabus.component";
import { AccountComponent } from "./accounts/accounts.component";
import { AnnouncementComponent } from "./announcement/announcement.component";
import { AssignmentComponent } from "./assignment/assignment.component";
import { ChatsComponent } from "./chats/chats.component";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GradesComponent } from "./grades/grades.component";
import { ScheduleComponent } from "./schedule/schedule.component";

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
        DashboardRoutingModule,
        NgChartsModule,
        MatIconModule,
        FormsModule,
        HttpClientModule,
        CommonModule,
    ],
})
export class DashboardModule {
}
