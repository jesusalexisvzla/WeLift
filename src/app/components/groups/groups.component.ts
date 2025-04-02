import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  public contactInformationForm = this.fb.group({
      fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
      email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
      phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
      message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  cards = [
    {
      title: "Family Groups",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      title: "Weddings",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      title: "Corporate",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    }
  ]

  cars = [
    {
      name: "Toyota Hiace",
      passengers: 6
    },
    {
      name: "Toyota Hiace",
      passengers: 10
    },
    {
      name: "Toyota Hiace",
      passengers: 10
    },
    {
      name: "Toyota Hiace",
      passengers: 6
    },
    {
      name: "Toyota Hiace",
      passengers: 10
    },
    {
      name: "Toyota Hiace",
      passengers: 10
    }
  ]

  constructor(
    private fb: UntypedFormBuilder,
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
