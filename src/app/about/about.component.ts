import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  staticPost: Post;
  posts: Array<Post>;
  
  private postsSub: any;

  constructor(private data: DataManagerService) { }

  ngOnInit(): void {
    this.staticPost = this.data.getStaticPost()
    this.postsSub = this.data.getPosts().subscribe(data => {
      this.posts = data
      console.log("this.posts in callback function: ", this.posts);
    });
    console.log("this.posts in About component: ", this.posts); // undefined?
  }

  ngOnDestroy(){
    this.postsSub.unsubscribe();
  }
}
