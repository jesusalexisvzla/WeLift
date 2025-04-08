import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userData: any | null = null;
  iconName = '';
  iconText = '';

  constructor(
    public router: Router,
    private loginService: LoginService,
    private authService: AuthService,
    private dataService: DataService,
  ) { 
    this.authService.user$.subscribe((user: any | null) => {
      if (user) {
        this.userData = user; 
        this.iconName = "logout";
        this.iconText = "Logout";
        console.log('Current User:', this.userData);
      } else {
        this.iconName = "login";
        this.iconText = "Login";
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
      await this.authService.signInWithGoogle().then(userCredential => {
        const user = {
          fullName: userCredential.user.displayName,
          email: userCredential.user.email,
          userId: userCredential.user.uid
        }
        this.dataService.getQuery('users', 'userId', userCredential.user.uid).then(userExists => {
          if (!userExists) this.dataService.pushRegister('users/', user);
        });
        console.log(this.userData);
        console.log(userCredential);
      })
    } else {
      const userCredential = await this.authService.signOutUser()
      delete this.userData;
      this.router.navigateByUrl('/home')
      console.log(this.userData)
      console.log(userCredential)
    }
  }

  move(url) {
    this.selected = url
    this.router.navigateByUrl(url)
  }
}
