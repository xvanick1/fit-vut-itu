import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    logout() {
        if (localStorage.getItem('login')) {
            localStorage.removeItem('login');
            this.router.navigate(['login']);
        }
    }

}
