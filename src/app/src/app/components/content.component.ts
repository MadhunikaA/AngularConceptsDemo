import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template:`
  <div class="item">
    <h5>
        <ng-content></ng-content> 
        {{ item.title }}
    </h5>
    <p>{{ item.description }}</p>
  </div>
  `,
  styles:[
      `.item{
        background: #f9f9f9;
        padding: 10px;
        margin: 10px;
        border: 1px solid #d9d9d9;
        
        h1{
          padding: 0;
          margin: 0;
        }
      }`
  ] 

})
export class ContentComponent implements OnInit {
    @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
