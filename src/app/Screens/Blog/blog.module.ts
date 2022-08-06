import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogOneScreenComponent } from './blog-one-screen/blog-one-screen.component';
import { BlogTwoScreenComponent } from './blog-two-screen/blog-two-screen.component';


@NgModule({
  declarations: [
    BlogComponent,
    BlogOneScreenComponent,
    BlogTwoScreenComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
