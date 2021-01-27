import { Component, OnInit } from '@angular/core';
import {Post} from '../../models/Post';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent implements OnInit {

  fullPost: Post;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

}
