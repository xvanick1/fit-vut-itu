import { Injectable } from '@angular/core';
import {Project} from '../_model/project';
import {Category} from '../_model/category';
import {UserService} from './user.service';

@Injectable()
export class ProjectService {


  public projectsArray: Project[];
  public projectID: number;

  constructor(
      private userService: UserService
  ) {
      this.projectsArray = [];
      this.projectID = 1;

      const category = new Category();
      category.name = 'Neco';
      category.id = 1;

      for (; this.projectID < 10; this.projectID++) {
          let project = new Project();
          project.id = this.projectID;
          project.name = 'Testovaci projekt ' + this.projectID;
          project.start = new Date();
          project.end = new Date();
          project.category = category;
          if (this.projectID % 3 === 0) {
              project.isPaid = true;
              project.author = this.userService.userArray.find(user => user.login === '196191');
          } else if ( this.projectID % 3 === 1) {
              project.longTime = true;
              project.author = this.userService.userArray.find(user => user.login === '196192');
          } else {
              project.author = this.userService.userArray.find(user => user.login === '196193');
          }
          project.positions = [];
          this.projectsArray.push(project);
      }
  }
}
