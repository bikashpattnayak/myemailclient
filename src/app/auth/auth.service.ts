import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = "https://api.angular-email.com"
  signedIn$ = new BehaviorSubject<boolean>(false);
  constructor(private httpClient: HttpClient) { 
  }

  signup(user:string, pwd:string, repwd:string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/signup`, {username: user, password: pwd, passwordConfirmation: repwd}, { withCredentials: true})
      .pipe(tap(() => this.signedIn$.next(true)))
  }

  signin(user:string, pwd:string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/signin`, {username: user, password: pwd},{ withCredentials: true})
      .pipe(tap(() => this.signedIn$.next(true)));
  }

  checkUser(user:string): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/username`, {username: user},{ withCredentials: true});
  }

  isSignedIn(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/auth/signedin`, { withCredentials: true})
    .pipe(tap((val) => this.signedIn$.next(val.authenticated)))
  }

  signout(): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/auth/signout`,{}, { withCredentials: true});
  }
}
