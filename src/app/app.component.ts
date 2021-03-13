import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myEmailClient';

  constructor(private auth: AuthService, private router: Router){}

  ngOnInit() {
    this.auth.isSignedIn().subscribe((val) => {
      if (val.authenticated === true) {
        this.router.navigateByUrl("/inbox");
      }
    })
  }
}
