import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {registerLocaleData} from "@angular/common";
import locatePt from '@angular/common/locales/pt'
import { ApplicationErrorHandler } from './security/app.error-handler';
registerLocaleData(locatePt, 'pt')


@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    LoginComponent,
    
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule.forRoot(),
    
  ],
  providers: [
              {provide: LOCALE_ID, useValue: 'pt'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler}
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
