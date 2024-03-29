import {Component, DoCheck, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../user';
import {UserService} from '../_service/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
    loggedUser: User;

    constructor(public router: Router,
                private userService: UserService
    ) { }

    ngOnInit() {
    }

    ngDoCheck() {
        this.loggedUser = this.userService.userArray.find(user => user.login === localStorage.getItem('login'));
    }

    logout() {
        if (localStorage.getItem('login')) {
            localStorage.removeItem('login');
            this.router.navigate(['login']);
        }
    }

}
