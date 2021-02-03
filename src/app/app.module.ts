import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { CarsComponent } from './components/main/cars/cars.component';
import { CreateComponent } from './components/main/create/create.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarsComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: MainComponent, children: [
         {path: 'cars', component: CarsComponent},
          {path: 'create', component: CreateComponent}
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
