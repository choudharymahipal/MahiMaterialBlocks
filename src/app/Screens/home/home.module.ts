import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { OneViewComponent } from './one-view/one-view.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    OneViewComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
