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

  constructor(private postService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(value => this.posts = value);
      this.activatedRoute.params.subscribe(value => {
        this.postService.getUserPosts(value.id).subscribe(result => this.userPosts = result);
      })
  }

  getBubbledPost(post: any): void {
    this.chosenPost = post;
  }
}
