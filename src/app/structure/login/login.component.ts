import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { LoginService } from '../../services/login.service';
import { Subject } from 'rxjs';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();

  public loginForm = this.fb.group({
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    password: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  public isLoading = false;

  constructor(
    public router: Router,
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  performRequest() {
    // if (this.loginForm.valid) {
    //   this.loginService.login()
    //   this.router.navigateByUrl('/')
    // }
    // const provider = new 
  }

  async logIn() {
    const logIn = await this.authService.signInWithGoogle()
    console.log(logIn)
    this.router.navigateByUrl('/home')
  }

  async logOut() {
    const logOut = await this.authService.signOutUser()
    console.log(logOut)
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
