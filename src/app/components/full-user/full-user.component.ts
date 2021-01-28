import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models';
import {UserService} from '../../services';

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  @Input()
  fullUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

}
