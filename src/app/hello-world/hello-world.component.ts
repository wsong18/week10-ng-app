import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input() photos: Array<string>;
  flag: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.photos = [
      "https://www.senecacollege.ca/news-and-events/seneca-news/seneca-business-commits-to-a-sustainable-future/_jcr_content/root/responsivegrid/container/container2/content/image_1207653334.img.jpg/1613655643313.jpg", 
      "https://www.senecacollege.ca/news-and-events/seneca-news/seneca-researchers-develop-next-gen-coating-for-covid-19-vaccines/_jcr_content/root/responsivegrid/container/container2/content/image_1207653334.img.jpg/1613500916799.jpg"
    ];
  }

  toggleImage() {
    this.flag = !this.flag;
  }
}
