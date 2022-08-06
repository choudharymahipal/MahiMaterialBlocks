import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterOneScreenComponent } from './footer-one-screen/footer-one-screen.component';
import { FooterTwoScreenComponent } from './footer-two-screen/footer-two-screen.component';
import { FooterComponent } from './footer.component';

const routes: Routes = [
  {
    path: '',
    component: FooterComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'footer_one',component:FooterOneScreenComponent },
      { path: 'footer_two',component:FooterTwoScreenComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FooterRoutingModule { }
