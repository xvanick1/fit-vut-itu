import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../_service/project.service';
import {Project} from '../_model/project';
import {of} from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  positions: Position[];
  projects: Project[];

  constructor(
      private projectService: ProjectService

  ) { }

  ngOnInit() {
    this.projects = this.projectService.projectsArray;
    for (let project of this.projects){
      //if (project.id === project.id of this.projects){
      //  let saved = project;
      }
    }

  }
  
