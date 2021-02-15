import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ICurrency} from '../interfaces';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  data = new BehaviorSubject<object>(null);
  date;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe ) {
  }

  setCurrentDate(): void {
    this.date = new Date();
    this.data.next(this.date);
  }

  decrementDate(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() - 1));
    this.data.next(this.date);
  }

  getCurrencies(): Observable<ICurrency[]>{
    const day = this.datePipe.transform(this.date, 'yyyyMMdd');
    return this
      .httpClient.get<ICurrency[]>(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${day}&json`);
  }
}
