import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataManagerService } from '../data-manager.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy {

  post: Post;
  private postSub;

  private id;
  private idSub;

  constructor(
    private data: DataManagerService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // approach 1 to get id value
    // this.id = this.route.snapshot.params['id'];
    // this.postSub = this.data.getPostById(this.id).subscribe( data => this.post = data );

    // approach 2 to get id value
    this.idSub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.postSub = this.data.getPostById(this.id).subscribe( data => this.post = data );
    });
    
  }

  ngOnDestroy() {
    if (this.postSub) this.postSub.unsubscribe();
    this.idSub?.unsubscribe();
  }
}
