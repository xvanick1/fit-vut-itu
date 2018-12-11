import {Component, DoCheck, OnInit} from '@angular/core';
import {ProjectService} from '../../_service/project.service';
import {Project} from '../../_model/project';

declare var $: any;

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
    myProjects: Project[];

    constructor(
        private projectService: ProjectService
    ) { }

    ngOnInit() {
        this.myProjects = [];
        for (let project of this.projectService.projectsArray) {
            if (project.author.login === localStorage.getItem('login')) {
                project._positionsCount = 0;
                project._registredPositionsCount = 0;
                for (const position of project.positions) {
                    project._positionsCount += position.capacity;
                }
                this.myProjects.push(project);
            }
        }

        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    }
}
