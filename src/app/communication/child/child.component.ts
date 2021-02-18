import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
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
