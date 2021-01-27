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
  userPosts: any[];
  posts: any[];
  chosenPost: any;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(value => {
        this.posts = value.postsData;
      });
  }

  getBubbledPost(post: any): void {
    this.chosenPost = post;
  }
}
