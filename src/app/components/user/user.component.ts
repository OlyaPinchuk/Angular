import {Component, Input, Output, OnInit} from '@angular/core';
import {User} from '../../models';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;
  @Output()
  bubbleUpUser = new EventEmitter();
  @Output()
  chooseUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getUser(user: User): void {
    this.bubbleUpUser.emit(user);
  }
  chooseUserForDetails(user: User): void {
    this.chooseUser.emit(user);
  }
}
