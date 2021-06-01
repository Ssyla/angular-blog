import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  posts: Post[] = [];
  postService: PostService;

  constructor(postService: PostService) {
    this.postService = postService;

  }

  ngOnInit(): void {
  }

}
