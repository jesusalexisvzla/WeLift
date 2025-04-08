import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { MatLegacyTabGroup as MatTabGroup } from '@angular/material/legacy-tabs';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { AuthService } from '../../services/auth.service'
import { DataService } from 'src/app/services/data.service';
import { EmailService } from 'src/app/services/email.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit, OnDestroy {
  private onDestroy = new Subject<void>();
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  userData: any | null = null;

  public transferDetailsForm = this.fb.group({
    origin: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    destination: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    adultsNo: new UntypedFormControl({value: 0, disabled: false}),
    childsNo: new UntypedFormControl({value: 0, disabled: false}),
    roundTrip: new UntypedFormControl({value: true, disabled: false}),

    arrivalAirline: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    arrivalFlightNo: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    arrivalDate: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeHours: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeMinutes: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeAP: new UntypedFormControl({value: 'AM', disabled: false}),

    departureAirline: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    departureFlightNo: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    departureDate: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    departureTimeHours: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    departureTimeMinutes: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    departureTimeAP: new UntypedFormControl({value: 'AM', disabled: false}),

    booster: new UntypedFormControl({value: false, disabled: false}),
    baby: new UntypedFormControl({value: false, disabled: false}),
    wheel: new UntypedFormControl({value: false, disabled: false}),
    grocery: new UntypedFormControl({value: false, disabled: false}),

    request: new UntypedFormControl({value: '', disabled: false})
  });

  public contactInformationForm = this.fb.group({
    firstName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    lastName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    confEmail: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    confPhone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    
    streetName1: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    streetName2: new UntypedFormControl({value: '', disabled: false}),
    exteriorNo: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    interiorNo: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    colony: new UntypedFormControl({value: '', disabled: false}),
    zipCode: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    country: new UntypedFormControl({value: '', disabled: false}, Validators.required),
  });

  bookNowObject : any = {
    origin: '',
    destination: '',
    adultsNo: 0,
    childsNo: 0,
    oneWay: false,

    arrivalAirline: '',
    arrivalFlightNo: '',
    arrivalDate: '',
    arrivalTime: '',

    departureAirline: '',
    departureFlightNo: '',
    departureDate: '',
    departureTime: '',

    booster: false,
    baby: false,
    wheel: false,
    grocery: false,
    request: '',
    userId: ''
  }

  contactObject : any = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  
    streetName1: '',
    streetName2: '',
    exteriorNo: '',
    interiorNo: '',
    colony: '',
    zipCode: '',
    country: '',
  }

  adultsNo = 0;
  childsNo = 0;

  originOptions = [
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

  destinationOptions = [
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

  aAirlineOptions = [
    {
      id: 1,
      name: "American Airlines"
    },
    {
      id: 2,
      name: "Mexican Airlines"
    },
    {
      id: 3,
      name: "AeroMexico"
    },
    {
      id: 4,
      name: "Volaris"
    }
  ]

  dAirlineOptions = [
    {
      id: 1,
      name: "American Airlines"
    },
    {
      id: 2,
      name: "Mexican Airlines"
    },
    {
      id: 3,
      name: "AeroMexico"
    },
    {
      id: 4,
      name: "Volaris"
    }
  ]

  countryOptions = [
    {
      id: 1,
      name: "Mexico"
    },
    {
      id: 2,
      name: "USA"
    },
    {
      id: 3,
      name: "Canada"
    },
    {
      id: 4,
      name: "China"
    }
  ]

  oneWayChecked = false;

  boosterChecked = false;
  babyChecked = false;
  wheelChecked = false;
  groceryChecked = false;

  btnDisabled = false;

  constructor(
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private dataService: DataService,
    private emailService: EmailService,
  ) {
    this.authService.user$.subscribe((user: any | null) => {
      if (user) {
        this.userData = user;
      }
    });
  }

  ngOnInit(): void {
    this.setListeners();
    let bookingObject = this.dataService.getBookingObject();
    if (bookingObject) {
      this.transferDetailsForm.patchValue({
        destination: bookingObject.destination,
        origin: bookingObject.origin
      })
      this.adultsNo = bookingObject.adultsNo;
      this.childsNo = bookingObject.childsNo;
      this.oneWayChecked = !bookingObject.roundTrip;
    }
    this.dataService.deleteBookingObject();
  }

  setListeners() {
    this.transferDetailsForm.get("origin").valueChanges.pipe(debounceTime(300)).subscribe( origin => {
      if (origin == this.transferDetailsForm.get("destination").value) {
        this.transferDetailsForm.controls['origin'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['origin'].setErrors(null)
      }
    });

    this.transferDetailsForm.get("destination").valueChanges.pipe(debounceTime(300)).subscribe( destination => {
      if (destination == this.transferDetailsForm.get("origin").value) {
        this.transferDetailsForm.controls['destination'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['destination'].setErrors(null)
      }
    });

    this.transferDetailsForm.get("arrivalTimeHours").valueChanges.subscribe( time => {
      var arrivalTime = this.transferDetailsForm.get('arrivalTimeHours').value
      if (!Number(time)) {
        this.transferDetailsForm.patchValue({
          arrivalTimeHours: arrivalTime.substring(0, arrivalTime.length - 1)
        })
      }
      if (arrivalTime > 12) {
        this.transferDetailsForm.controls['arrivalTimeHours'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['arrivalTimeHours'].setErrors(null)
      }
    });

    this.transferDetailsForm.get("arrivalTimeMinutes").valueChanges.subscribe( time => {
      var arrivalTime = this.transferDetailsForm.get('arrivalTimeMinutes').value
      if (!Number(time)) {
        this.transferDetailsForm.patchValue({
          arrivalTimeMinutes: arrivalTime.substring(0, arrivalTime.length - 1)
        })
      }
      if (arrivalTime > 59) {
        this.transferDetailsForm.controls['arrivalTimeMinutes'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['arrivalTimeMinutes'].setErrors(null)
        const padded = time.padStart(2, '0');
        this.transferDetailsForm.get('time')?.setValue(padded, { emitEvent: false });
      }
    });

    this.transferDetailsForm.get("departureTimeHours").valueChanges.subscribe( time => {
      var departureTime = this.transferDetailsForm.get('departureTimeHours').value
      if (!Number(time)) {
        this.transferDetailsForm.patchValue({
          departureTimeHours: departureTime.substring(0, departureTime.length - 1)
        })
      }
      if (departureTime > 12) {
        this.transferDetailsForm.controls['departureTimeHours'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['departureTimeHours'].setErrors(null)
      }
    });

    this.transferDetailsForm.get("departureTimeMinutes").valueChanges.subscribe( time => {
      var departureTime = this.transferDetailsForm.get('departureTimeMinutes').value
      if (!Number(time)) {
        this.transferDetailsForm.patchValue({
          departureTimeMinutes: departureTime.substring(0, departureTime.length - 1)
        })
      }
      if (departureTime > 59) {
        this.transferDetailsForm.controls['departureTimeMinutes'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['departureTimeMinutes'].setErrors(null)
      }
    });

    this.contactInformationForm.get("confEmail").valueChanges.pipe(debounceTime(300)).subscribe( email => {
      if (email != this.contactInformationForm.get("email").value) {
        this.contactInformationForm.controls['confEmail'].setErrors({'incorrect': true})
      } else {
        this.contactInformationForm.controls['confEmail'].setErrors(null)
      }
    });

    this.contactInformationForm.get("confPhone").valueChanges.pipe(debounceTime(300)).subscribe( phone => {
      if (phone != this.contactInformationForm.get("phone").value) {
        this.contactInformationForm.controls['confPhone'].setErrors({'incorrect': true})
      } else {
        this.contactInformationForm.controls['confPhone'].setErrors(null)
      }
    });
  }

  changeLocations(origin, destination) {
    this.transferDetailsForm.patchValue({
      origin: destination,
      destination: origin
    })
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

  validateTransferForm() {
    if (this.transferDetailsForm.valid && (this.adultsNo + this.childsNo > 0)) {
      var TDForm = this.transferDetailsForm;
  
      this.transferDetailsForm.patchValue({
        adultsNo: this.adultsNo,
        childsNo: this.childsNo,
      });
  
      this.bookNowObject = {
        ...this.bookNowObject, 
        ...this.transferDetailsForm.value, 
        'arrivalTime': 
          String(TDForm.get('arrivalTimeHours').value).padStart(2, '0') + ':' +
          String(TDForm.get('arrivalTimeMinutes').value).padStart(2, '0') + ' ' +
          TDForm.get('arrivalTimeAP').value,
        'departureTime': 
          String(TDForm.get('departureTimeHours').value).padStart(2, '0') + ':' +
          String(TDForm.get('departureTimeMinutes').value).padStart(2, '0') + ' ' +
          TDForm.get('departureTimeAP').value,
        'roundTrip': !this.oneWayChecked,
        'booster': this.boosterChecked,
        'baby': this.babyChecked,
        'wheel': this.wheelChecked,
        'grocery': this.groceryChecked,
        'userId': this.userData.uid
      };
  
      delete this.bookNowObject.arrivalTimeHours;
      delete this.bookNowObject.arrivalTimeMinutes;
      delete this.bookNowObject.arrivalTimeAP;
      delete this.bookNowObject.departureTimeHours;
      delete this.bookNowObject.departureTimeMinutes;
      delete this.bookNowObject.departureTimeAP;
  
      console.log(this.bookNowObject)
    } else {
      this.showToast('Information not filled in correctly', 'yellow-snackbar')
    }
  }

  validateContactForm() {
    if (this.contactInformationForm.valid) {
      this.contactObject = {
        ...this.contactInformationForm.value,
      }

      console.log(this.contactObject)
    } else {
      this.showToast('Information not filled in correctly', 'yellow-snackbar')
    }
  }

  async performRequest() {
    this.btnDisabled = true;
    if ((this.transferDetailsForm.valid && (this.adultsNo + this.childsNo > 0)) && this.contactInformationForm.valid) {
      await this.dataService.pushRegister('bookings/', this.bookNowObject).then(response => {
        if (response) {
          this.showToast('Information filled in correctly', 'green-snackbar');
          // this.emailService.sendEmail(infoObject.email, 'Information', infoObject.message)
        } else {
          this.btnDisabled = false;
        }
      })
    } else {
      this.btnDisabled = false;
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