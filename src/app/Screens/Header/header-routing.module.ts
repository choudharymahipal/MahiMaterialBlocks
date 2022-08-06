import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderOneScreenComponent } from './header-one-screen/header-one-screen.component';
import { HeaderTwoScreenComponent } from './header-two-screen/header-two-screen.component';
import { HeaderComponent } from './header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'header_one',component:HeaderOneScreenComponent },
      { path: 'header_two',component:HeaderTwoScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
