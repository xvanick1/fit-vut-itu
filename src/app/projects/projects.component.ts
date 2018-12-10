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
      for (let project of this.projects) {
          project._positionsCount = 0;
          project._registredPositionsCount = 0;
          for (const position of project.positions) {
              project._positionsCount += position.capacity;
          }
      }
  }

}
