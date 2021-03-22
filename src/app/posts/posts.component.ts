import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {

  posts: Array<Post>;
  private postsSub: any;

  private page;
  private pageSub;

  constructor(private data: DataManagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // approach 1 for getting query parameter
    // this.page = this.route.snapshot.queryParams['page'];
    // this.getPosts();

    // approach 2 for getting query parameter
    this.pageSub = this.route.queryParams.subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.page = +params['page'] || 0;
      this.getPosts();
    });

  }

  getPosts() {
    this.postsSub = this.data.getPosts().subscribe(
      data => {
        if(this.page) {
          this.posts = data.slice((this.page-1)*10, this.page*10);
        }
        else { // if query parameter 'page' is not provided, show all posts (without paging)
          this.posts = data;
        }
        console.log("this.posts in callback function: ", this.posts);
      },
      (e) => { console.log('error: %s', e); } // for handling Error/Exception
    );
    console.log("this.posts in About component: ", this.posts); // undefined, why?
  }

  ngOnDestroy(){
    if(this.postsSub) this.postsSub.unsubscribe();
    this.pageSub?.unsubscribe();
  }

  goToPost(id) {
    this.router.navigate(['/post', id]);
  }
  
}

