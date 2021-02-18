import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  viewMode = 'flowers';

  isButton = true;
  isPrimary = true;
  canSubmit = false;

  agreed = 0;
  disagreed = 0;
  voters = ['madhu', 'apple', 'banana'];


  constructor() { }

  ngOnInit() {
  }
  toggleButton() {
    this.isPrimary = !this.isPrimary;
    this.canSubmit = true;
  }
  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
}
}
