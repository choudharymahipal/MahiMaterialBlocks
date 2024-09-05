import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsRoutingModule } from './icons-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { IconsComponent } from './icons.component';
import { MaterialIconsComponent } from './material-icons/material-icons.component';


@NgModule({
  declarations: [
    IconsComponent,
    MaterialIconsComponent
  ],
  imports: [
    CommonModule,
    IconsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class IconsModule { }
