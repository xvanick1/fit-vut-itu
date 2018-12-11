import {Component, OnInit} from '@angular/core';
import {Project} from '../../_model/project';
import {Position} from '../../_model/position';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';
import {Router} from '@angular/router';
import {Category} from '../../_model/category';
import * as moment from 'moment';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

    protected project: Project;
    protected position: Position;
    protected positions: Position[];
    protected id: number;
    protected positionForm: FormGroup;

    protected title: string;

    constructor(protected projects: ProjectService,
                protected userService: UserService,
                protected router: Router) {
    }

    ngOnInit() {

    }


    initModal() {
        this.position = new Position();
        this.positionForm.reset();
        this.positionForm.get('count').setValue(1);
    }

    addPosition() {
        this.position.id = this.id;
        this.position.name = this.positionForm.get('position').value;
        this.position.description = this.positionForm.get('description').value;
        this.position.capacity = this.positionForm.get('count').value;
        this.id++;
        this.positions.push(this.position);
        this.initModal();
    }

    deletePosition(id: number) {
        console.log(id);
        for (let i = 0; i < this.positions.length; i++) {
            if (this.positions[i].id === id) {
                this.positions.splice(i, 1);
            }
        }
    }

    setCategory(value: any) {
        console.log(value);
        if (!value.valid)
            return;
        for (let cat of this.projects.catageryArray) {
            if (cat.id === +value.value) {
                this.categ = cat;
                console.log(this.project.category);
                break;
            }
        }
    }

    compareFn(c1: Category, c2: Category): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }

    startDate(value: any) {
        if (!value.valid) {
            return;
        }
        this.project.start = moment(value.value).toDate();
    }

    endDate(value: any) {
        if (!value.valid) {
            return;
        }
        this.project.end = moment(value.value).toDate();
    }

    onSubmit() {
    }

}
