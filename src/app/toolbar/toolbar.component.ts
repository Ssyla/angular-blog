import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchModel } from '../models/searchTag.model'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})



export class ToolbarComponent implements OnInit {
  public SearchTagModel = new SearchModel()


  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  handleSubmit($event: Event) {
    $event.preventDefault();
    let query : string = this.SearchTagModel.query
    if (query === "") {
      this.router.navigate(['/blog-page'])
    } else {
      this.router.navigate(['/tag/' + query])
    }
  }

}
