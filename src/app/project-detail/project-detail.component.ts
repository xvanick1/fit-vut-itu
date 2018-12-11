import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../_service/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  positions: Position[];

  constructor(
      private projectService: ProjectService

  ) { }

  ngOnInit() {

  }

}
