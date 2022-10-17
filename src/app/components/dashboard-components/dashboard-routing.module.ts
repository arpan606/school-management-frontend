import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../../auth/login-guard';
import { SyllabusComponent } from '../syllabus/syllabus.component';
import { AccountComponent } from './accounts/accounts.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ChatsComponent } from './chats/chats.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GradesComponent } from './grades/grades.component';



const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canLoad: [LoginGuard],
    },
    {
        path: 'assignment',
        component: AssignmentComponent,
        canLoad: [LoginGuard],
    },
    {
        path: 'syllabus',
        component: SyllabusComponent,
        canLoad: [LoginGuard],
    },
    {
        path: 'grades',
        component: GradesComponent,
        canLoad: [LoginGuard],
    },
    {
        path: 'account',
        component: AccountComponent,
        canLoad: [LoginGuard],
    },
    {
        path: 'chat',
        component: ChatsComponent,
        canLoad: [LoginGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
