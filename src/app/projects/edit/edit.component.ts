import {Component, OnInit} from '@angular/core';
import {ProjectFormComponent} from '../project-form/project-form.component';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';
import {Project} from '../../_model/project';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: '../project-form/project-form.component.html',
    styleUrls: ['../project-form/project-form.component.scss']
})
export class EditComponent extends ProjectFormComponent implements OnInit {
    title = 'Upravit projekt';

    constructor(protected projects: ProjectService,
                protected userService: UserService,
                protected route: ActivatedRoute) {
        super(projects, userService);
    }

    ngOnInit() {
        this.project = new Project();
        this.route.params.subscribe(params => {
            this.project.id = +params['id'];
        });

        for (let proj of this.projects.projectsArray) {
            if (proj.id === this.project.id) {
                this.project = proj;
                break;
            }
        }

        console.log(this.project.start);

        this.positions = this.project.positions;
        this.positionForm = new FormGroup({
                position: new FormControl(''),
                description: new FormControl(''),
                count: new FormControl('')
            }
        );
        this.initModal();
    }

}
