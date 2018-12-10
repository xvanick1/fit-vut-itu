import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProjectsComponent } from './projects/projects.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProjectService} from './_service/project.service';
import { MyProjectsComponent } from './projects/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    LoginComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
      ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
