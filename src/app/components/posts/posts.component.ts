import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services';
import {User} from '../../models';
import {Post} from '../../models';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  user: User;
  posts: Post[];
  chosenPost: Post;

  constructor(private postService: PostService) {
  }
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }
  getBubbledPost(post: Post): void {
    this.chosenPost = post;
  }
}
