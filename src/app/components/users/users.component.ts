import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../models';
import {UserService} from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  userForPosts: User;
  userFotDetails: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(value => this.users = value);

  }
  getBubbleUser(user: User): void {
    this.userForPosts = user;
  }
  getChosenUser(user: User): void {
    this.userFotDetails = user;
  }
}
