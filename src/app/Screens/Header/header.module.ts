import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HeaderOneScreenComponent } from './header-one-screen/header-one-screen.component';
import { HeaderTwoScreenComponent } from './header-two-screen/header-two-screen.component';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderOneScreenComponent,
    HeaderTwoScreenComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
