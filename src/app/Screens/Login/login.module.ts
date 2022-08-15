import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginOneScreenComponent } from './login-one-screen/login-one-screen.component';
import { LoginTwoScreenComponent } from './login-two-screen/login-two-screen.component';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LoginOneScreenComponent,
    LoginTwoScreenComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    MaterialModule
  ]
})
export class LoginModule { }
