import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: UserService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPosts();
  }
}
