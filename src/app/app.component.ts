import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'my-app';
  id: number;

  // studentPhotos: Array<string> = [
  studentPhotos: string[] = [
    "https://www.senecacollege.ca/news-and-events/seneca-news/seneca-business-commits-to-a-sustainable-future/_jcr_content/root/responsivegrid/container/container2/content/image_1207653334.img.jpg/1613655643313.jpg", 
    "https://www.senecacollege.ca/news-and-events/seneca-news/seneca-researchers-develop-next-gen-coating-for-covid-19-vaccines/_jcr_content/root/responsivegrid/container/container2/content/image_1207653334.img.jpg/1613500916799.jpg"
  ];


  toDo() {
    this.title = 'the Angular app';
  }
}
