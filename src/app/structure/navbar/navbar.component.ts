import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userData: any | null = null;
  message = ''

  constructor(
    public router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) { 
    this.authService.user$.subscribe((user: any | null) => {
      if (user) {
        this.userData = user; // Store user data
        this.message = "Log Out";
        console.log('Current User:', this.userData);
      } else {
        this.message = "Log In";
        console.log('No user is logged in');
      }
    });
  }
  
  selected: string = this.router.url

  ngOnInit(): void {
    console.log(this.selected)
  }

  async logInOutUser(logIn) {
    if (logIn) {
      const logIn = await this.authService.signInWithGoogle()
      this.message = "Log Out"
      console.log(this.userData)
      console.log(logIn)
    } else {
      const logOut = await this.authService.signOutUser()
      this.message = "Log In"
      console.log(this.userData)
      console.log(logOut)
    }
  }

  move(url) {
    this.selected = url
    this.router.navigateByUrl(url)
  }
}
