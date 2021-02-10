import { Component, OnInit } from '@angular/core';
import {CurrencyService} from '../../services/currency.service';
import {ICurrency} from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  currencyList: ICurrency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getCurrencies().subscribe(value => this.currencyList = value);
  }

}
