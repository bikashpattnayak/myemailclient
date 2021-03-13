import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AppValidators {

    constructor(private authservice: AuthService) {}


    AvailableUserName = (ctrl: AbstractControl): Observable<any> => {
        const { value } = ctrl;
        return this.authservice.checkUser(value).pipe(map(() => { return null}), catchError((err) => of({ notAvailable: true})));
    }
    

}