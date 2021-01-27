import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import {RouterModule} from '@angular/router';
import { FullUserComponent } from './components/full-user/full-user.component';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    FullUserComponent,
    PostsComponent,
    HomeComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'link/home', component: HomeComponent},
      {path: 'link/users', component: UsersComponent, children: [
        {path: ':id', component: FullUserComponent},
        {path: ':id/posts', component: PostsComponent}
        ]},
      {path: 'link/posts', component: PostsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
