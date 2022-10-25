import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/login-guard';
import { LoginComponent } from './components/home/login/login.component';
import { Page404Component } from './components/home/page404/page404.component';


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
    {
        path: '404',
        component: Page404Component
    },
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
