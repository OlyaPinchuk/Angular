import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CurrencyService} from '../../services/currency.service';
import {ICurrency} from '../../interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  date;
  currencyList: ICurrency[];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.date = this.currencyService.data.getValue();
    console.log(this.date);
    this.currencyService.getCurrencies().subscribe(value => this.currencyList = value);
  }

}
