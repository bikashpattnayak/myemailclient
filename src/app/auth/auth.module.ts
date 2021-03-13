import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';


import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [SigninComponent,SignoutComponent,SignupComponent ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
