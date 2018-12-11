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
  project: Project;

  constructor(
      private projectService: ProjectService,
      protected route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let projectID: number;
    this.route.params.subscribe(params => {
      projectID = +params['id'];
    });


    // OR: this.project = this.projectService.projectsArray.find(proj => proj.id === projectID);
    for (let project of this.projectService.projectsArray) {
      if (project.id === projectID) {
        this.project = project;
        break;
      }
    }

  }
}
