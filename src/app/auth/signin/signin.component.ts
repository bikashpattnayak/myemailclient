import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.myForm =  this.fb.group({
      name: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  login() {
    const { name, password } = this.myForm.value;
    this.auth.signin(name, password).subscribe({
      next: () => {
        this.auth.signedIn$.next(true);
        this.router.navigateByUrl("/inbox")
      },
      error: (err) => {
        this.myForm.setErrors({"invalidPassword": true})
      }
    })
    console.log(this.myForm);
  }
 

}
