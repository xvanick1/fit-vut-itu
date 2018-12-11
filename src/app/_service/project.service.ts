import { Injectable } from '@angular/core';
import {Project} from '../_model/project';
import {Category} from '../_model/category';
import {UserService} from './user.service';
import {Position} from '../_model/position';

@Injectable()
export class ProjectService {

  public projectsArray: Project[];
  public catageryArray: Category[];

  constructor(
      private userService: UserService
  ) {
      this.projectsArray = [];
      this.catageryArray = [];

      let category = new Category();
      category.name = 'Informační systém';
      category.id = 1;
      this.catageryArray.push(category);

      let category2 = new Category();
      category2.name = 'Konstruování';
      category2.id = 2;
      this.catageryArray.push(category2);

      for (let i = 1; i < 6; i++) {
          let project = new Project();
          project.id = i;
          project.name = 'Testovaci projekt ' + i;
          project.start = new Date();
          project.end = new Date();
          project.category = category;
          project.positions = [];
          if (i % 3 === 0) {
              project.isPaid = true;
              project.author = this.userService.userArray.find(user => user.login === '196191');
              let position = new Position();
              position.capacity = 5;
              position.name = 'Programátor';
              project.positions.push(position);
          } else if ( i % 3 === 1) {
              project.longTime = true;
              let position = new Position();
              position.capacity = 1;
              position.name = 'Název pozice';
              project.positions.push(position);
              project.author = this.userService.userArray.find(user => user.login === '196192');
          } else {
              project.category = category2;
              let position = new Position();
              position.capacity = 2;
              position.name = 'CAD systémy';
              project.positions.push(position);
              project.author = this.userService.userArray.find(user => user.login === '196193');
          }
          this.projectsArray.push(project);
      }
  }
}
