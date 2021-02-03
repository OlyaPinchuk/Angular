import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {CarsComponent} from './components/main/cars/cars.component';
import {CreateComponent} from './components/main/create/create.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '/cars', component: CarsComponent},
      {path: '/create', component: CreateComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
