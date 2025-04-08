import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { MatLegacyTabGroup as MatTabGroup } from '@angular/material/legacy-tabs';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { DataService } from 'src/app/services/data.service';
import { EmailService } from 'src/app/services/email.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private onDestroy = new Subject<void>();

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  userData: any | null = null;

  public transferDetailsForm = this.fb.group({
    origin: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    destination: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    adultsNo: new UntypedFormControl({value: 0, disabled: false}),
    childsNo: new UntypedFormControl({value: 0, disabled: false}),
    roundTrip: new UntypedFormControl({value: true, disabled: false})
  });

  public contactInformationForm1 = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  public contactInformationForm2 = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

  airportOptions = [
    {
      id: 1,
      name: "Los Mochis Sinaloa"
    },
    {
      id: 2,
      name: "Los Cabos San Lucas"
    },
    {
      id: 3,
      name: "CDMX"
    },
    {
      id: 4,
      name: "Guadalajara"
    }
  ]

  hotelOptions = [
    {
      id: 1,
      name: "Holiday Inn"
    },
    {
      id: 2,
      name: "The Velvet Key Boutique"
    },
    {
      id: 3,
      name: "Feather & Stone Hotel"
    },
    {
      id: 4,
      name: "Indigo Boutique Hotel"
    }
  ]

  commentsOptions = [
    {
      id: 1,
      name: "Conrad J. Sommer",
      date: "15/09/2021",
      stars: 4,
      messageTitle: "Honestly, amazing.",
      messageText: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      id: 1,
      name: "Michael Jackson",
      date: "15/09/2021",
      stars: 4,
      messageTitle: "Tee-hee!",
      messageText: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna. Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
  ] 

  cardsSection1 = [
    {
      title: "Book Your Shuttle",
      text: "Online, via email or over a phone call with our staff."
    },
    {
      title: "Confirmation Voucher",
      text: "Online, via email or over a phone call with our staff."
    },
    {
      title: "Book Your Shuttle",
      text: "Online, via email or over a phone call with our staff."
    },
    {
      title: "Book Your Shuttle",
      text: "Online, via email or over a phone call with our staff."
    },
  ];

  borderlessCards = [
    {
      header: 'Service',
      title: 'We are passionate about service.',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.'
    },
    {
      header: 'Values',
      title: 'We are passionate about service.',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.'
    },
    {
      header: 'Experience',
      title: 'We are passionate about service.',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.'
    },
    {
      header: 'COVID-19',
      title: 'We are passionate about service.',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.'
    },
    {
      header: 'Respect',
      title: 'We are passionate about service.',
      text: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna.'
    }
  ];

  selectedOrigin = ''
  selectedDestination = ''
  adultsNo = 0;
  childsNo = 0;
  oneWayChecked = false;

  btnDisabled = false;

  constructor(
    private fb: UntypedFormBuilder,
    public router: Router,
    private snackBar: MatSnackBar,
    private dataService: DataService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  changeRB(id, property) {
    if (this[property]) {
      var element = document.getElementById(id);
      setTimeout(() => {
        element.classList.remove('mat-radio-checked');
        element.classList.value.replace('mat-radio-checked', '');
      }, 0);
    } else {
      var element = document.getElementById(id);
      setTimeout(() => {
        element.classList.add('mat-radio-checked');
      }, 0);
    }
    this[property] = !this[property];
  }

  changePicture() {
  }

  async performRequest(isBooking?, isFirst?) {
    this.btnDisabled = true;
    if (isBooking) {
      this.btnDisabled = false;
      if (this.transferDetailsForm.valid && (this.adultsNo + this.childsNo > 0)) {
        const bookingObject = {
          adultsNo: this.adultsNo,
          childsNo: this.childsNo,
          destination: this.transferDetailsForm.get('destination')?.value,
          origin: this.transferDetailsForm.get('origin')?.value,
          roundTrip: !this.oneWayChecked,
        };
        this.dataService.storeBookingObject(bookingObject);
        this.router.navigateByUrl("/book-now");
      } else {
        console.log("booking not valid");
        this.showToast('Information in "From Airport to Hotel / From Hotel to Airport" not filled in correctly', 'yellow-snackbar');
      } 
    } else {
      var contactForm = isFirst ? this.contactInformationForm1 : this.contactInformationForm2;
      if (contactForm.valid) {
        const infoObject = {
          fullName: contactForm.get('fullName')?.value,
          email: contactForm.get('email')?.value,
          phone: contactForm.get('phone')?.value,
          message: contactForm.get('message')?.value
        };
        if (!isFirst) {
          await this.dataService.pushRegister('contacts/', infoObject).then(response => {
            if (response) {
              console.log(response);
              this.showToast('Information correclty registered', 'green-snackbar');
              // this.emailService.sendEmail(infoObject.email, 'Follow Up', infoObject.message);
              this.contactInformationForm2.reset();
            }
            this.btnDisabled = false;
          });
        }
      } else {
        this.btnDisabled = false;
        this.showToast('Information in ' + (isFirst ? '"Home & Airbnb Transfers"' : '"Get In Touch"') + ' not filled in correctly', 'yellow-snackbar');
      } 
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