import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-class-style-binding',
  templateUrl: './attribute-class-style-binding.component.html',
  styleUrls: ['./attribute-class-style-binding.component.css']
})
export class AttributeClassStyleBindingComponent implements OnInit {

  headerSpan: number = 2;
  showWarning = true;
  grayBackground = "lightgray";
  showBackground: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
