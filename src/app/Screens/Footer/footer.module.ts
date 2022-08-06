import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import { FooterOneScreenComponent } from './footer-one-screen/footer-one-screen.component';
import { FooterTwoScreenComponent } from './footer-two-screen/footer-two-screen.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    FooterOneScreenComponent,
    FooterTwoScreenComponent
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    MaterialModule
  ]
})
export class FooterModule { }
