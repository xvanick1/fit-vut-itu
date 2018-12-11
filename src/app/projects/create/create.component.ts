import { Component, OnInit } from '@angular/core';
import {Project} from '../../_model/project';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ProjectFormComponent} from '../project-form/project-form.component';

@Component({
  selector: 'app-create',
  templateUrl: '../project-form/project-form.component.html',
  styleUrls: ['../project-form/project-form.component.scss']
})
export class CreateComponent extends ProjectFormComponent implements OnInit {
    title = 'Založit projekt';

    constructor(protected projects: ProjectService,
                protected userService: UserService,
                protected route: ActivatedRoute) {
        super(projects, userService);
    }

    ngOnInit() {
        this.project = new Project();
        this.positions = [];
        this.positionForm = new FormGroup({
                position: new FormControl(''),
                description: new FormControl(''),
                count: new FormControl('')
            }
        );
        this.initModal();
    }

    create() {
        console.log(this.projects.projectsArray);
        this.project.positions = this.positions;
        this.project.author = this.userService.userArray.find(user => user.login === localStorage.getItem('login'));
        this.projects.projectsArray.push(this.project);
    }
}
