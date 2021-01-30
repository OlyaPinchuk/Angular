import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models';
import {Observable} from 'rxjs';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this
      .httpClient
      .get<User[]>(URL + 'users');

  }

  getUserById(id: number): Observable<User> {
    return this
      .httpClient
      .get<User>(URL + `users/${id}`);
  }



}
