import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})

export class FooComponent implements OnInit {

  studentName: string = "Jason Bourne";
  studentPhoto: string = "https://upload.wikimedia.org/wikipedia/en/6/60/Jason_bourne_infobox.jpg";
  studentUpdated: Date = new Date();
  
  constructor() { }

  ngOnInit(): void { // equvelent to React useEffect()
  }

}
