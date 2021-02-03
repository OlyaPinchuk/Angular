import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../interfaces';
import {cars} from '../config/URL';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ICar[]>{
    return this.httpClient.get<ICar[]>(cars);
  }
  // createCar(car: ICar): Observable<ICar>{
  //   return this.httpClient.post<ICar>(form...)
  // }
}
