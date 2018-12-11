import {Component, OnInit} from '@angular/core';
import {ProjectFormComponent} from '../project-form/project-form.component';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';
import {Project} from '../../_model/project';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {Category} from '../../_model/category';

@Component({
    selector: 'app-edit',
    templateUrl: '../project-form/project-form.component.html',
    styleUrls: ['../project-form/project-form.component.scss']
})
export class EditComponent extends ProjectFormComponent implements OnInit {
    title = 'Upravit projekt';
    categ: Category;

    constructor(protected projects: ProjectService,
                protected userService: UserService,
                protected route: ActivatedRoute,
                protected router: Router) {
        super(projects, userService, router);
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

        this.id = this.positions.length + 1;
        this.initModal();
    }

    onSubmit() {
        //this.project.category = this.categ;
        console.log(this.project.category);
        //console.log(this.projects.catageryArray);
        this.project.positions = this.positions;
        this.router.navigate(['moje-projekty']);
    }


}
