import { Injectable } from '@angular/core';
import {Project} from '../_model/project';
import {Category} from '../_model/category';
import {User} from '../user';

@Injectable()
export class ProjectService {


  public projectsArray: Project[];

  constructor() {
      this.projectsArray = [];

      const category = new Category();
      category.name = 'Neco';
      category.id = 1;

      const user = new User();
      user.name = 'Franta Vašek';

      for (let i = 1; i < 10; i++) {
          let project = new Project();
          project.id = i;
          project.name = 'Testovaci projekt ' + i;
          project.start = new Date();
          project.end = new Date();
          project.category = category;
          project.author = user;
          this.projectsArray.push(project);
      }
  }
}
