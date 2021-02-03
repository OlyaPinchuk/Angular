import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the page of my angular app';
  count = 0.97;
  user = {name: 'kokos', age: 234};
  price = '1000544';
  time = new Promise(resolve => {
    setTimeout(() => {
      resolve(200);
    }, 2000);
  });
  today = new Date();

}
