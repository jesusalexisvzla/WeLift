import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard  {
    constructor(
        private router: Router,
        private loginService : LoginService
    ){}

    canActivate(): Observable<boolean> {
        return this.loginService.verifyAuth().pipe(
            tap(estado => {
                if (!estado) this.router.navigateByUrl('/login')
            })
        )
    }
}