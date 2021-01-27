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

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToUser(): void{
    this.router.navigate([this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user});

  }


}
