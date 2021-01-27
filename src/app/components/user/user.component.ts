import {Component, Input, Output, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getUser(user: User): void {
    this.bubbleUpUser.emit(user);
  }

  goToUser(): void{
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user});

  }


}
