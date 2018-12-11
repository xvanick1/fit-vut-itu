import {Component, OnInit} from '@angular/core';
import {Project} from '../../_model/project';
import {Position} from '../../_model/position';
import {FormControl, FormGroup} from '@angular/forms';
import {ProjectsComponent} from '../projects.component';
import {ProjectService} from '../../_service/project.service';
import {UserService} from '../../_service/user.service';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

    project: Project;
    position: Position;
    positions: Position[];
    id: number;
    positionForm: FormGroup;

    constructor(private projects: ProjectService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.id = 1;
        this.project = new Project();
        this.project.isPaid = false;
        this.project.longTime = false;
        this.positions = [];
        this.positionForm = new FormGroup({
                position: new FormControl(''),
                description: new FormControl(''),
                count: new FormControl('')
            }
        );
        this.initModal();
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

    create() {
        console.log(this.projects.projectsArray);
        this.project.positions = this.positions;
        this.project.author = this.userService.userArray.find(user => user.login === localStorage.getItem('login'));
        this.projects.projectsArray.push(this.project);
    }

}
