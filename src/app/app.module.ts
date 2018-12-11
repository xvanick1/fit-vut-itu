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
import { ProjectDetailComponent } from './project-detail/project-detail.component';

import { MyProjectsComponent } from './projects/my-projects/my-projects.component';
import {UserService} from './_service/user.service';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './projects/create/create.component';
import { EditComponent } from './projects/edit/edit.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectsComponent,
    LoginComponent,
    ProjectDetailComponent,
    MyProjectsComponent,
    ProjectFormComponent,
    HomeComponent,
    CreateComponent,
    EditComponent
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
      ProjectService,
      UserService,
      DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
