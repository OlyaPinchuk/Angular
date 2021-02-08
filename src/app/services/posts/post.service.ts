import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../../interfaces/postInterface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // private posts = new BehaviorSubject<any[]>(['nothing']);

  constructor(private httpClient: HttpClient) { }

  getAllPosts(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
