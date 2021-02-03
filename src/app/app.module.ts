import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { RedDirective } from './red.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    RedDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
