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

      const user1 = new User();
      user1.login = '196191';
      user1.name = 'Franta Vašek';

      const user2 = new User();
      user2.login = '196192';
      user2.name = 'Franta Franta';

      const user3 = new User();
      user3.login = '196193';
      user3.name = 'Franta Pepa';

      for (let i = 1; i < 10; i++) {
          let project = new Project();
          project.id = i;
          project.name = 'Testovaci projekt ' + i;
          project.start = new Date();
          project.end = new Date();
          project.category = category;
          if (i % 3 === 0) {
              project.author = user1;
          } else if ( i % 3 === 1) {
              project.author = user2;
          } else {
              project.author = user3;
          }
          project.positions = [];
          this.projectsArray.push(project);
      }
  }
}
