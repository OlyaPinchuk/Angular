import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services';
import { FullPostComponent } from './components/full-post/full-post.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule, PostsComponent],
  providers: [PostService],
})
export class PostsModule { }
