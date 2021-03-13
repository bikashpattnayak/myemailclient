import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppValidators } from "../../validators/Validators";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm: FormGroup;
  isSignedIn: boolean;
  constructor(private fb: FormBuilder, private customValidators: AppValidators, private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authservice.isSignedIn().subscribe((val) => {
      if (val.authenticated === true) {
        this.router.navigateByUrl("/inbox");
      }
    })
    this.myForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)], this.customValidators.AvailableUserName],
      password: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      repassword: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
    }, {
      validators: (ctrl: FormGroup) => {
        if (ctrl.controls["password"].value === ctrl.controls["repassword"].value) {
          return null;
        } else {
          return { passwordMismatch: true };
        }
      }
    });

    this.authservice.signedIn$.subscribe((val: boolean) => this.isSignedIn = val);
  }

  formSubmit() {
    const { name, password, repassword } = this.myForm.value;
    this.authservice.signup(name, password, repassword).subscribe(
      {
        next: (val) => {  },
        error: (err) => {  }
      });
    console.log(this.myForm.value);
  }
}
