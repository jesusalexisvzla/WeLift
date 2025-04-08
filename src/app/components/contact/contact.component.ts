import { Component, OnInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { DataService } from 'src/app/services/data.service';
import { EmailService } from 'src/app/services/email.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  private onDestroy = new Subject<void>();

  public contactInformationForm = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  btnDisabled = false;

  constructor(
    private fb: UntypedFormBuilder,
    public router: Router,
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private emailService: EmailService,
  ) { }

  ngOnInit(): void {
  }

  async performRequest() {
    this.btnDisabled = true;
    if (this.contactInformationForm.valid) {
      const infoObject = {
        fullName: this.contactInformationForm.get('fullName')?.value,
        email: this.contactInformationForm.get('email')?.value,
        phone: this.contactInformationForm.get('phone')?.value,
        message: this.contactInformationForm.get('message')?.value
      };
      
      console.log('registered info', infoObject);
      await this.dataService.pushRegister('contacts/', infoObject).then(response => {
        if (response) {
          console.log(response);
          // this.emailService.sendEmail(infoObject.email, 'Follow Up', infoObject.message);
          this.showToast('Information correclty registered', 'green-snackbar')
          this.contactInformationForm.reset();
        }
        this.btnDisabled = false;
      })  
    } else {
      this.btnDisabled = false;
      this.showToast('Information not filled in correclty', 'yellow-snackbar')
    }
  }

  showToast(mensaje: string, style: string) {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000,
      panelClass: [style],
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
    this.onDestroy.unsubscribe();
  }
}
