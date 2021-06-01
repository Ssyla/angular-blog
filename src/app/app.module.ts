import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminService } from "./services/admin.service";
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminCreatePostComponent } from './admin/admin-create-post/admin-create-post.component';
import { BlogMainPageComponent } from './blog-main-page/blog-main-page.component';
import { BlogPostPageComponent } from './blog-post-page/blog-post-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AdminNavbarComponent,
    AdminCreatePostComponent,
    BlogMainPageComponent,
    BlogPostPageComponent,
    HomePageComponent,
    UnknownPageComponent,
    ToolbarComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    AdminService,
    PostService,
    FlexLayoutModule,
    MatToolbarModule,
    IvyCarouselModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
