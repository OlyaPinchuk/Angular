import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/posts/post.service';
import {IPost} from '../../interfaces/postInterface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // initialState: any[];
  posts: IPost[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
   this.postService.getAllPosts().subscribe(value => this.posts = value);

  }

}
