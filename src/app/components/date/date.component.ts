import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CurrencyService} from '../../services/currency.service';
import {ICurrency} from '../../interfaces';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date;
  currencies: ICurrency[];

  constructor(private datePipe: DatePipe, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.setCurrentDate();
    this.date = this.currencyService.data.getValue();
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.currencyService.getCurrencies().subscribe(value => this.currencies = value);
  }

  decrementDate(): void {
    this.currencyService.decrementDate();
    this.date = this.currencyService.data.getValue();
    this.date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    this.currencyService.getCurrencies().subscribe(value => this.currencies = value);
  }

}
