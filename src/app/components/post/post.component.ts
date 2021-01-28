import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: any;
  @Input()
  userPost: any;
  @Output()
  bubbleUpPost = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getPost(post: any): void {
    this.bubbleUpPost.emit(post);
  }

}
