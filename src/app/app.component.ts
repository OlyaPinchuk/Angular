import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {IUser} from './interfaces/userInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // #1
  // checkInput(myInput: HTMLInputElement): void {
  //   console.log(myInput);
  // }
// ===============================================================================

  // #2
  // user = {name: 'Nick', age: 233};
  //
  // checkForm(myForm: NgForm): void {
  //   console.log(myForm);
  // }
// ===============================================================================

  // #3
  user: IUser;
  usersList: IUser[] = [];

  name = new FormControl('', [Validators.required, Validators.minLength(5), this.fukcValidator]);
  age = new FormControl('', Validators.required);

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
  });

  handleFormSubmit(): void {
    this.user = {userName: this.name.value, userAge: this.age.value};
    this.usersList.push(this.user);
    console.log((this.usersList));
  }

  fukcValidator(inputData: AbstractControl): any {
    if (inputData.value.includes('fukc')){
      return {error: true, text: 'fukc presented here'};
    }
    return null;
  }

}
