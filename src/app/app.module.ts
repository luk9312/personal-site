import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { MnFullpageModule, MnFullpageService  } from 'ngx-fullpage';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SchoolComponent } from './components/experience/school/school.component';
import { WorkComponent } from './components/experience/work/work.component';
import { ResumeComponent } from './components/resume/resume.component';

import { MaterializeModule } from 'angular2-materialize';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SchoolComponent,
    WorkComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    PdfViewerModule,
    MnFullpageModule.forRoot(),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers:[
    MnFullpageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
