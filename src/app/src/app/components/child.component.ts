import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template:  `
  <h6>Name:{{name}}</h6>
  <button class="btn btn-success" (click)="vote(true)"  [disabled]="voted">Agree</button>
  <button class="btn btn-danger" (click)="vote(false)" [disabled]="voted">Disagree</button>
   `,
   styles:[`
     h6{
         color:green
     }
   `]
})
export class ChildComponent implements OnInit {
    @Input()  name: string;
    @Output() onVoted = new EventEmitter<boolean>();
    voted = false;
  
    vote(agreed:boolean) {
      this.onVoted.emit(agreed);
      this.voted = true;
    }
  
  constructor() { }

  ngOnInit() {
  }
}
