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
  
  selected: string = this.router.url

  ngOnInit(): void {
    console.log(this.selected)
  }

  logout(){
    this.loginService.logout();
    this.router.navigateByUrl('/login')
  }

  move(url) {
    this.selected = url
    this.router.navigateByUrl(url)
  }
}
