import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models';
import {HttpClient} from '@angular/common/http';
import {URL} from '../config';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<Post[]> {
    return this
      .httpClient
      .get<Post[]>(URL + 'posts');
  }
  getUserPosts(id: number): Observable<Post[]>{
    return this
      .httpClient
      .get<Post[]>(URL + `users/${id}/posts`);
  }
}
