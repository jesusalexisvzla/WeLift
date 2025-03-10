import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login')
  }
}
