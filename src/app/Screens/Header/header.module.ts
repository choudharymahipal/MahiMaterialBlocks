import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderOneScreenComponent } from './header-one-screen/header-one-screen.component';
import { HeaderTwoScreenComponent } from './header-two-screen/header-two-screen.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderOneScreenComponent,
    HeaderTwoScreenComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    MaterialModule
  ]
})
export class HeaderModule { }
