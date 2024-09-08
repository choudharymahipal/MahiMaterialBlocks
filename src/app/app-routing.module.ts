import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./Screens/Login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Screens/dashboard/dashboard.module').then((m) => m.DashboardModule),
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
    path: 'icons',
    loadChildren: () =>
      import('./Screens/icons/icons.module').then((m) => m.IconsModule),
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
