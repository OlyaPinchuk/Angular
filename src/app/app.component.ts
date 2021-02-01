import { Component } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is the page of my angular app';

  // checkInput(myInput: HTMLInputElement): void {
  //   console.log(myInput);
  // }
// ===============================================================================

  // user = {name: 'Nick', age: 233};
  //
  // checkForm(myForm: NgForm): void {
  //   console.log(myForm);
  // }
// ===============================================================================

  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  age = new FormControl('', Validators.required);

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
  });

  submitForm(): void {
    console.log(this.myForm);
  }

}
