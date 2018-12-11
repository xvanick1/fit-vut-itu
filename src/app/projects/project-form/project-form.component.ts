import {Component, OnInit} from '@angular/core';
import {Project} from '../../_model/project';
import {Position} from '../../_model/position';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';
import {Router} from '@angular/router';

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

    onSubmit(){}

}
