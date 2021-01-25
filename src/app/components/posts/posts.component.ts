import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // posts: any[];

  constructor(private postService: UserService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(value => {
    //   this.postService.getAllPosts(value.id).subscribe(value => this.posts = value);
    //
    // });
  }

}
