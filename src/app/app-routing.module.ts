import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {MyProjectsComponent} from './projects/my-projects/my-projects.component';
import {ProjectDetailComponent} from './project-detail/project-detail.component';
import {HomeComponent} from './home/home.component';
import {EditComponent} from './projects/edit/edit.component';
import {CreateComponent} from './projects/create/create.component';

const routes: Routes = [
    {path: '', redirectTo: '/domu', pathMatch: 'full' },
    {path: 'moje-projekty', component: MyProjectsComponent},
    {path: 'projekty', component: ProjectsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'vytvorit', component: CreateComponent},
    {path: 'detailprojektu/:id', component: ProjectDetailComponent},
    {path: 'domu', component: HomeComponent},
    {path: 'editace/:id', component: EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
