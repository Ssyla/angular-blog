import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreatePostModel } from '../models/createPost.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  firebase: string = 'https://fir-angular-7b106-default-rtdb.europe-west1.firebasedatabase.app/'
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPosts() {
    // return this.http.get<Post[]>("https://fir-angular-7b106-default-rtdb.europe-west1.firebasedatabase.app/post.json");
    return this.http.get<CreatePostModel[]>(this.firebase + ".json");
  }

  getPostsFromTag(tag: string) {
    // return this.http.get<Post[]>("https://fir-angular-7b106-default-rtdb.europe-west1.firebasedatabase.app/post.json");
    return this.http.get<CreatePostModel[]>(this.firebase + tag + ".json");
  }

  getPostFromId(tag : string, id : string) {
    return this.http.get<CreatePostModel[]>(this.firebase + tag + "/" + id + ".json");
  }

  createPost(tag: string, post: CreatePostModel) {
    console.log("HEllo")
    return this.http.post<Post>(this.firebase + tag +".json", post, this.httpOptions);
  }

  deletePost(tag: string, id: string) {
    return this.http.delete<Post>(this.firebase + tag + "/" + id + ".json")
  }

  editPost(post: CreatePostModel, tag: string, id:string) {
    return this.http.put<Post>(this.firebase + tag + "/" + id + ".json", post, this.httpOptions);
  }
}
