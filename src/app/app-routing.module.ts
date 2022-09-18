import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/accounts/accounts.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GradesComponent } from './components/grades/grades.component';
import { LoginComponent } from './components/login/login.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'assignment',
        component: AssignmentComponent
    },
    {
        path: 'syllabus',
        component: SyllabusComponent
    },
    {
        path: 'grades',
        component: GradesComponent
    },
    {
        path: 'account',
        component: AccountComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
