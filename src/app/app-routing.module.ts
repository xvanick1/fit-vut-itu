import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectFormComponent} from './projects/project-form/project-form.component';

const routes: Routes = [
    {path: 'projekty', component: ProjectsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'vytvorit', component: ProjectFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
