import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule, UsersComponent],
  providers: [UserService]
})
export class UserModule { }
