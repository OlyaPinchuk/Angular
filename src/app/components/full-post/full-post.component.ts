import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../models';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {
  fullPost: Post;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log( this.activatedRoute.params);
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostById(value.id).subscribe(result => this.fullPost = result);
    });
  }
}

