import { Injectable } from '@angular/core';
import {Project} from '../_model/project';
import {Category} from '../_model/category';
import {UserService} from './user.service';

@Injectable()
export class ProjectService {


  public projectsArray: Project[];

  constructor(
      private userService: UserService
  ) {
      this.projectsArray = [];

      const category = new Category();
      category.name = 'Neco';
      category.id = 1;

      for (let i = 1; i < 10; i++) {
          let project = new Project();
          project.id = i;
          project.name = 'Testovaci projekt ' + i;
          project.start = new Date();
          project.end = new Date();
          project.category = category;
          if (i % 3 === 0) {
              project.author = this.userService.userArray.find(user => user.login === '196191');
          } else if ( i % 3 === 1) {
              project.author = this.userService.userArray.find(user => user.login === '196192');
          } else {
              project.author = this.userService.userArray.find(user => user.login === '196193');
          }
          project.positions = [];
          this.projectsArray.push(project);
      }
  }
}
