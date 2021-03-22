import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  messages: string[] = [];
  
  logClick(msg){
    this.messages.push(msg);
    console.log(msg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
