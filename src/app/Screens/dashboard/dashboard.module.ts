import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { DashboardOneScreenComponent } from './dashboard-one-screen/dashboard-one-screen.component';
import { DashboardTwoScreenComponent } from './dashboard-two-screen/dashboard-two-screen.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOneScreenComponent,
    DashboardTwoScreenComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class DashboardModule { }
