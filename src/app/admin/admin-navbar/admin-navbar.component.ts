import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  public view : string = "display";
  public edit : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  setView(view: string) {
    this.view = view
    this.edit = ""
  }

  Edit($event: string) {
    console.log("Edit event" , $event)
    this.edit = $event
    this.view = "create"
  }

  changeView($event : string) {
    this.view = $event
  }
}
