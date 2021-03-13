import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.auth.signout().subscribe(()=> {
      this.auth.signedIn$.next(false);
      this.router.navigateByUrl("/signin");
    });
  }

}
