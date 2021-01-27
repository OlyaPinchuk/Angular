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
  // userPosts: any[];
  posts: any[];
  chosenPost: any;

  constructor(private postService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.postService.getAllPosts().subscribe(value => this.posts = value);
  }
  //
  // getUserPosts(id): void {
  //   id = this.user.id;
  //   this.userPosts = this.posts.filter(item => item.userId === id);
  //   console.log(this.userPosts);
  // }
  getBubbledPost(post: any): void {
    this.chosenPost = post;
  }
}
