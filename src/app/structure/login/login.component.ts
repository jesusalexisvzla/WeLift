import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { LoginService } from '../../services/login.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  onDestroy = new Subject<void>();

  public loginForm = this.fb.group({
    email: new FormControl({value: '', disabled: false}, Validators.required),
    password: new FormControl({value: '', disabled: false}, Validators.required)
  });

  public isLoading = false;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService.verifyLogin();
  }

  performRequest() {
    if (this.loginForm.valid) {
      this.loginService.login()
      this.router.navigateByUrl('/')
    }
  }
  
  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
