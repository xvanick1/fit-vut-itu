import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../_service/project.service';
import {Project} from '../_model/project';
import {of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  positions: Position[];
  projects: Project[];
  project: Project;

  constructor(
      private projectService: ProjectService,
      protected route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.projects = this.projectService.projectsArray;
    this.route.params.subscribe(params => {
      this.project.id = +params['id'];
    });

    for (let project of this.projects) {
      if (project.id === this.project.id) {
        project = this.project;
      }
    }

  }
}
