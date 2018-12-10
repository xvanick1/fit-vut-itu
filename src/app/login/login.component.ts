import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private router: Router,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
      if (localStorage.getItem('login') !== null){
          this.router.navigate(['/']);
      }
      this.user = new User();
  }

  onSubmit() {
    if (this.user.login === '196191' && this.user.password === 'heslo') {
        localStorage.setItem('login', this.user.login);
        this.router.navigate(['/']);
    }
  }

}
