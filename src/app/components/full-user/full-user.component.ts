import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  fullUser: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.fullUser = this.router.getCurrentNavigation().extras.state as User;
    });

  }

  ngOnInit(): void {
  }

}

