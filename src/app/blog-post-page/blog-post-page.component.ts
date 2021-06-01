import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

interface obj {
  title: string,
  banner: string,
  author: string,
  tag: string,
  content: string,
  id: string
}

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.css']
})
export class BlogPostPageComponent implements OnInit {

  public url: string = window.location.href;
  public displayPost: obj = <obj>{};


  constructor(private router: ActivatedRoute, private post: PostService) {
    console.log(this.url)

  }

  retrievePost(tag: string, id: string): void {
    let post = localStorage.getItem(String(id))
    if (post) {
      let obj: obj = JSON.parse(post)
      this.displayPost = obj
    } else {
      this.post.getPostFromId(tag, id).subscribe((myPost) => {
        this.displayPost = {...JSON.parse(JSON.stringify(myPost)), id}
      })
    }
  }

  ngOnInit(): void {
    this.router.url.subscribe((elem) => {
      if (elem[0].path === "blog-post") {
        this.retrievePost(elem[1].path, elem[2].path)
      }
    })
  }

}
