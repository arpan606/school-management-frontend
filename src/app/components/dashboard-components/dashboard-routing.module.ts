import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyllabusComponent } from '../syllabus/syllabus.component';
import { AccountComponent } from './accounts/accounts.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ChatsComponent } from './chats/chats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradesComponent } from './grades/grades.component';



const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
    },
    {
        path: 'assignment',
        component: AssignmentComponent,
    },
    {
        path: 'syllabus',
        component: SyllabusComponent,
    },
    {
        path: 'grades',
        component: GradesComponent,
    },
    {
        path: 'account',
        component: AccountComponent,
    },
    {
        path: 'chat',
        component: ChatsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
