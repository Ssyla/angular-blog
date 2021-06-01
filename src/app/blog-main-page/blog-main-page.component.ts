import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePostModel } from '../models/createPost.model';
import { PostService } from '../services/post.service';

interface obj {
  title: string,
  banner: string,
  date: string,
  author: string,
  tag: string,
  id: string
}

@Component({
  selector: 'app-blog-main-page',
  templateUrl: './blog-main-page.component.html',
  styleUrls: ['./blog-main-page.component.css']
})
export class BlogMainPageComponent implements OnInit {
  @Output() postToEdit = new EventEmitter<string>();

  public size: number = 10;
  public titi: string = "";
  public Admin: boolean = false;
  public items: obj[] = [];

  constructor(private router: ActivatedRoute, private postService: PostService, private route: Router) {

  }

  getAllPosts() {
    this.items = []
    this.postService.getPosts().subscribe((elements) => {
      let keys = Object.keys(elements)
      keys.forEach((key: string) => {
        if (key !== "admin") {
          let posts = JSON.parse(JSON.stringify(elements))[key]
          let postKeys: string[] = Object.keys(posts)
          postKeys.forEach((post: string) => {
            this.items.push({ ...posts[post], id : post})
          })
        }
      })
    })
  }

  getPostFromTag(tag: string) {
    this.items = []
    this.postService.getPostsFromTag(tag).subscribe((elements) => {
      let posts = JSON.parse(JSON.stringify(elements))
      let postKeys: string[] = Object.keys(posts)
      postKeys.forEach((post: string) => {
        this.items.push({ ...posts[post], id : post})
      })
    })
  }

  ngOnInit(): void {
    this.items = []
    localStorage.clear()
    this.router.url.subscribe((elem) => {
      if (elem[0].path === "admin") {
        this.Admin = true
        this.getAllPosts()
      } else if (elem[0].path === "tag") {
        this.getPostFromTag(elem[1].path);
      } else {
        this.getAllPosts()
      }
    })

  }

  deletePost(postId: string, i : number) {
    this.postService.deletePost(this.items[i].tag, postId).subscribe((elem) => {
      this.items.splice(i, 1)
    })
  }

  gotoBlog(postId: string, i : number): void {
    localStorage.setItem(String(postId), JSON.stringify(this.items[i]))
    if (this.Admin === true) {
      this.postToEdit.emit(String(postId))
    } else {
      this.route.navigate(['/blog-post/' + this.items[i].tag + "/"+ postId])
    }
  }

}
