import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isSignedIn: boolean;
  baseRoute: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.signedIn$.subscribe((val: boolean) => { this.isSignedIn = val });
    this.router.events.pipe(filter(x => { if( x instanceof NavigationEnd) return true; else false;})).subscribe((val:NavigationEnd) => {
      if(val.url === "/") {
        this.baseRoute = true;
      }
    })
  }

}
