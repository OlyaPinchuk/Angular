import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  date;

  constructor(private datePipe: DatePipe, private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.setCurrentDate();
    this.date = this.currencyService.data.getValue();
  }

  decrementDate(): void {
    this.currencyService.decrementDate();
    this.date = this.currencyService.data.getValue();
  }

}
