import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Post2 } from './post2';
import { Episode } from './espisode';
import { EpisodeResponse } from './espisodeResponse';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) { }

  getAllPosts():Observable<EpisodeResponse>{
    return this.httpClient.get<EpisodeResponse>("https://rickandmortyapi.com/api/episode");
  }
  getAllImgs():Observable<Post2[]>{
    return this.httpClient.get<Post2[]>("https://jsonplaceholder.typicode.com/photos");
  }

  getPostById(id: number): Observable<Post>{
    return this.httpClient.get<Post>("https://jsonplaceholder.typicode.com/posts/"+id);
  }

  createPost(post: Post):Observable<Post>{
    return this.httpClient.post<Post>("https://jsonplaceholder.typicode.com/posts", post);    
  }

  updatePost(post: Post):Observable<Post>{
    return this.httpClient.put<Post>("https://jsonplaceholder.typicode.com/posts/"+post.id,
      post)
  }
}
