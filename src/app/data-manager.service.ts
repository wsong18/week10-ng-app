import { Injectable } from '@angular/core';
import { Post } from './post';

import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataManagerService {

  constructor(private http: HttpClient) { }

  // CRUD operation methods for remove resources/entities

  // GetAll posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }

  // GetOne post
  getPostById(id): Observable<Post> {
    // return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }



  getStaticPost(): Post{ // return type "Post"
    return {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
}
}
