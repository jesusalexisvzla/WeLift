import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactInformationForm = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  constructor(
    private fb: UntypedFormBuilder,
    public router: Router,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  performRequest() {
    const infoObject = {
      fullName: this.contactInformationForm.get('fullName')?.value,
      email: this.contactInformationForm.get('email')?.value,
      phone: this.contactInformationForm.get('phone')?.value,
      message: this.contactInformationForm.get('message')?.value
    };
    
    console.log('registered info', infoObject);
    // this.emailService.sendEmail(infoObject.email, 'Information', infoObject.message)
  }

}
