import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class DashboardComponent implements OnInit {
  items: any = [
    {
      title: "Item 1",
    },
    {
      title: "Item 2",
    },
    {
      title: "Item 3",
    },
    {
      title: "Item 4",
    }
  ]

  constructor() { }

  ngOnInit() {

  }


}
