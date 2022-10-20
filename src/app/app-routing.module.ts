import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login-guard';
import { LoginComponent } from './components/home/login/login.component';


const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard-components/dashboard.module').then(m => m.DashboardModule),
        canLoad: [LoginGuard]
    },
    {
        path: '',
        component: LoginComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
