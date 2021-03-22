import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  staticPost: Post;
  
  constructor(private data: DataManagerService) { }

  ngOnInit(): void {
    this.staticPost = this.data.getStaticPost()

    // Observable example (Week 8)
    var source = new Observable(observer => {
      let i = 0;
      let interval = setInterval(() => {
    
        observer.next(i++);
    
        if (i == 5) {
          clearInterval(interval);
          observer.complete();
        }
    
      }, 1000);
    });
    
    var subscription = source.subscribe(
      function (x) { console.log('next: %s', x); }, // "next"
      function (e) { console.log('error: %s', e); }, // "error"
      function () { console.log('complete'); } // "complete"
    );
  }

}
