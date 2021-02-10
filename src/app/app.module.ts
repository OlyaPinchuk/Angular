import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DateComponent } from './components/date/date.component';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyComponent } from './components/currency/currency.component';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DateComponent,
    CurrencyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
