import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './components/home/login/login.component';
import { LoginGuard } from './auth/login-guard';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { Page404Component } from './components/home/page404/page404.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        Page404Component
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
        ServiceWorkerModule.register('ngsw-worker.js', {
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
        
    ],
    providers: [
        LoginGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthTokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
