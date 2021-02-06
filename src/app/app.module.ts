import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // {path: '', component: AppComponent},
      {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
