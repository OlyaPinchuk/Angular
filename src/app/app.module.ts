import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
// import {UserModule} from './aa/user.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
    ])
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
