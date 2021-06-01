import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { CreatePostModel } from "../../models/createPost.model"

interface obj {
  title: string,
  banner: string,
  date: string,
  author: string,
  tag: string,
  id: string
}


@Component({
  selector: 'app-admin-create-post',
  templateUrl: './admin-create-post.component.html',
  styleUrls: ['./admin-create-post.component.css']
})
export class AdminCreatePostComponent implements OnInit {
  @Input() edit: string = "";
  @Output() changeView  = new EventEmitter<string>();

  public PostData = new CreatePostModel()
  public banner: string | ArrayBuffer | null = "";
  public error: boolean = false;
  public editPost: boolean = false
  public id: string = "";
  public oldTag : string = "";

  constructor(private postService: PostService, private route: Router) { }

  ngOnInit(): void {
    if (this.edit !== "") {
      this.editPost = true
      let article = localStorage.getItem(String(this.edit))
      if (article) {
        let obj: obj = JSON.parse(article)
        this.PostData.title = obj.title
        this.PostData.author = obj.author
        this.PostData.content = "Lorem ipsum dolor sit amet"
        this.oldTag = obj.tag
        this.PostData.tag = obj.tag
        this.PostData.banner = obj.banner
        this.id = obj.id
        localStorage.removeItem(String(this.edit))
        console.log(this.PostData)
      }
    }
  }

  handleFileInput(e: Event) {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.PostData.banner = reader.result
    };
  }

  createPost() : void {
    this.postService.createPost(this.PostData.tag, this.PostData).subscribe((element) => {
      this.changeView.emit("display")
    });
  }

  EditPost() : void {
    if (this.PostData.tag === this.oldTag) {
      this.postService.editPost(this.PostData, this.PostData.tag, this.id).subscribe((elem) => {
        this.changeView.emit("display")
      })
      return
    }
    this.postService.deletePost(this.oldTag, this.id).subscribe((element) => {
      this.createPost()
    })
  }

  handleSubmit($event: Event) {
    $event.preventDefault()
    let obj = JSON.parse(JSON.stringify(this.PostData))
    let keys: string[] = Object.keys(obj)
    keys.forEach((key: string) => {
      if (obj[key] === undefined || obj[key] === "" || obj[key] === null) {
        this.error = true
      }
    })
    if (this.error === true) {
      console.log("Error values")
      return
    }
    if (this.editPost === true) {
      this.EditPost()
    } else {
      this.createPost()
    }
  }

}
