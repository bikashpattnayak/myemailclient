import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", component: SignupComponent, pathMatch: 'full' },
  { path: "signin", component: SigninComponent },
  { path: "signout", component: SignoutComponent },
  { path: "signup", component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
