import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';

// import {UserModule} from './aa/user.module';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent},
      {path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
      {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
    ])
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
