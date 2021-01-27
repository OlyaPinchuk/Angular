import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  chosenUser: User;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.activatedRoute.data);
    this.activatedRoute.data.subscribe(value => this.users = value.usersData);

  }
  getBubbleUser(user: User): void {
    this.chosenUser = user;
  }

}
