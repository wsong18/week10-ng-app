import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() btnClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  btnOneClicked(){
    this.btnClicked.emit("Hello from the Child");
  }

  btnTwoClicked(){
    this.btnClicked.emit("Button Two Clicked");
  }

}
