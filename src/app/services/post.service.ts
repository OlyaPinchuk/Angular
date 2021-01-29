import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../models';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAllPosts(): Observable<Post[]> {
    return this
      .httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getPostById(id: number): Observable<Post> {
    return this
      .httpClient
      .get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getUserPosts(id: number): Observable<Post[]>{
    return this
      .httpClient
      .get<Post[]>(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  }
}
