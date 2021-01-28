import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayUsers = false;
  displayPosts = false;

  constructor() { }

  ngOnInit(): void {
  }
  showUsers(): void {
    if (this.displayPosts === true){
      this.displayPosts = false;
    }
    this.displayUsers = !this.displayUsers;
  }

  showPosts(): void {
    if (this.displayUsers === true){
      this.displayUsers = false;
    }
    this.displayPosts = !this.displayPosts;
  }
}
