import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./Screens/Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('./Screens/Header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'footer',
    loadChildren: () =>
      import('./Screens/Footer/footer.module').then((m) => m.FooterModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./Screens/Blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: '',
    redirectTo: '/login/login_one',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
