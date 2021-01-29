import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post, User} from '../../models';
import {PostService} from '../../services';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  user: User = null;
  userPosts: Post[];
  posts: Post[];
  chosenPost: Post;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(value => this.posts = value);
      this.activatedRoute.params.subscribe(value => {
        this.postService.getUserPosts(value.id).subscribe(result => this.userPosts = result);
      });
  }

  getBubbledPost(post: any): void {
    this.chosenPost = post;
  }
}
