import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this
      .httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users');

  }

  getUserById(id): Observable<User> {
    return this
      .httpClient
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getAllPosts(): Observable<any[]> {
    return this
      .httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getUserPosts(id): Observable<any[]>{
    return this
      .httpClient
      .get<any[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }
}
