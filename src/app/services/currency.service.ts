import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICurrency} from '../interfaces';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  data = new BehaviorSubject(0);

  date;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe ) {
  }

  setCurrentDate(): void {
    this.date = new Date();
    this.date = this.datePipe.transform(this.date, 'yyyyMMdd');
    this.data.next(this.date);
    console.log(this.data.getValue());

  }

  decrementDate(): void {
    if (this.data.getValue().toString() === this.datePipe.transform((new Date(new Date().setDate(new Date().getDate() - 1))), 'yyyyMMdd')) {
      this.date = new Date(new Date().setDate(new Date().getDate() - 2));
      this.date = this.datePipe.transform(this.date, 'yyyyMMdd');
      this.data.next(this.date);

    } else {
      this.date = new Date(new Date().setDate(new Date().getDate() - 1));
      this.date = this.datePipe.transform(this.date, 'yyyyMMdd');
      this.data.next(this.date);
    }
    console.log(this.data.getValue());
  }


  getCurrencies(): Observable<ICurrency[]>{
    return this.httpClient.get<ICurrency[]>(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${this.data.getValue()}&json`);
  }
}
