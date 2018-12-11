import { Injectable } from '@angular/core';
import {User} from '../user';

@Injectable()
export class UserService {
  public userArray: User[];

  constructor() {
      this.userArray = [];

      let user1 = new User();
      user1.login = '196191';
      user1.name = 'Franta Vašek';
      this.userArray.push(user1);

      let user2 = new User();
      user2.login = '196192';
      user2.name = 'Franta Franta';
      this.userArray.push(user2);

      let user3 = new User();
      user3.login = '196193';
      user3.name = 'Franta Pepa';
      this.userArray.push(user3);
  }
}
