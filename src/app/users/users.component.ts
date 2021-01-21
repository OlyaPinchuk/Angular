import { Component, OnInit } from '@angular/core';
import {users} from '../../db/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = users;

  ngOnInit(): void {
  }

}
