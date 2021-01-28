import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  user: any = null;
  posts: any[];
  chosenPost: any;

  constructor(private postService: UserService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  // getPosts(): void {
  //   this.postService.getAllPosts().subscribe(value => this.posts = value);
  // }

  getBubbledPost(post: any): void {
    this.chosenPost = post;
  }
}
