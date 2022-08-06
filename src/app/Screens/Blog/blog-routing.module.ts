import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogOneScreenComponent } from './blog-one-screen/blog-one-screen.component';
import { BlogTwoScreenComponent } from './blog-two-screen/blog-two-screen.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'blog_one', component: BlogOneScreenComponent },
      { path: 'blog_two', component: BlogTwoScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
