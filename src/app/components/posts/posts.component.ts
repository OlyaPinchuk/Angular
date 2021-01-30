import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post, User} from '../../models';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // @Input()
  // user: User = null;
  // userPosts: Post[];
  posts: Post[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
      this.activatedRoute.data.subscribe(value => {
        this.posts = value.postsData;
      });
  }

}
