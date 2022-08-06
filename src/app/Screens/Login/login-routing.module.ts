import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneScreenComponent } from './login-one-screen/login-one-screen.component';
import { LoginTwoScreenComponent } from './login-two-screen/login-two-screen.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'login_one',component:LoginOneScreenComponent },
      { path: 'login_two',component:LoginTwoScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
