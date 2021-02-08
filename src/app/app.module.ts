import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomPipe } from './custom.pipe';
import { RedDirective } from './red.directive';
import { CustomPipe2Pipe } from './pipes/customPipe2/custom-pipe2.pipe';
import { CustomDirective2Directive } from './directives/customDirective2/custom-directive2.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    RedDirective,
    CustomPipe2Pipe,
    CustomDirective2Directive,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
