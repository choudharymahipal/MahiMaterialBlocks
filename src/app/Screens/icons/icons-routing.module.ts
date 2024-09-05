import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconsComponent } from './icons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';

const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
    children: [
      { path: '', redirectTo: '' },
      { path: 'materialicons',component:MaterialIconsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
