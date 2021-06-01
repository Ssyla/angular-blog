import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  ngOnInit(): void {

    // GET
    // this.postService.getPosts()
    //   .subscribe((posts: Post[]) => {
    //     console.log(posts);
    // });

    /* let post: Post = {
      title: "wingardium",
      image: undefined,
      text: "leviosaaaa",
      date: new Date,
    }

    // POST
    this.postService.createPost(post)
      .subscribe((post: Post) => {
        console.log(post);
      }) */
  }

}
