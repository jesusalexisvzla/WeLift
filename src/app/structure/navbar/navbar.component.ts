import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from '../../services/auth.service'
import { DataService } from '../../services/data.service'
import { ConfirmModalComponent } from '../modals/confirm-modal/confirm-modal.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private onDestroy = new Subject<void>();
  public isBigSize = window.innerWidth > 800;

  userData: any | null = null;
  iconName = '';
  iconText = '';
  
  selected: string = this.router.url;

  constructor(
    public router: Router,
    public dialog: MatDialog,
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
      const dialogRef = this.dialog.open(ConfirmModalComponent, {
        data: {

        },
        autoFocus: false,
        width: '400px',
        height: '150px',
        panelClass: 'plantillaModal',
        disableClose: true
      })

    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy)).subscribe(async (data) => {
      if ( data?.hasChanges ) {
        const userCredential = await this.authService.signOutUser()
        delete this.userData;
        this.router.navigateByUrl('/home')
        console.log(this.userData)
        console.log(userCredential)
      }
    })
    }
  }

  move(url) {
    this.selected = url;
    this.router.navigateByUrl(url);
  }

  openCloseSB() {
    this.dataService.openCloseSB();
  }
}
