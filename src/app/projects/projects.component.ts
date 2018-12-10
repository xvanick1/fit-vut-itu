import { Component, OnInit } from '@angular/core';
import {Project} from '../_model/project';
import {ProjectService} from '../_service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[];

  constructor(
      private projectService: ProjectService
  ) { }

  ngOnInit() {
      this.projects = this.projectService.projectsArray;
      console.log(this.projects);
  }

}
