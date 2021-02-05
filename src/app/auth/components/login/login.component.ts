import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersData = [
    {name: 'jack', password: 123}
  ];

  validation = false;
  myForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      userName: new FormControl(''),
      password: new FormControl('')
    });
  }


  checkForm(): void {
    console.log(this.myForm.controls.userName.value);
    console.log(this.myForm.controls.password.value);

    for (let item of this.usersData){
      if (this.myForm.controls.userName.value === item.name && this.myForm.controls.password.value === item.password.toString()){
        console.log('success');
        this.validation = true;
      } else{
        console.log('no such user');
      }
    }
  }

}
