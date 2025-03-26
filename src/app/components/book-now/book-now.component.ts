import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatTabGroup } from '@angular/material/tabs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  public transferDetailsForm = this.fb.group({
    origin: new FormControl({value: '', disabled: false}, Validators.required),
    destination: new FormControl({value: '', disabled: false}, Validators.required),
    adultsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    childsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    oneWay: new FormControl({value: false, disabled: false}, Validators.required),

    arrivalAirline: new FormControl({value: '', disabled: false}, Validators.required),
    arrivalFlightNo: new FormControl({value: '', disabled: false}, Validators.required),
    arrivalDate: new FormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeHours: new FormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeMinutes: new FormControl({value: '', disabled: false}, Validators.required),
    arrivalTimeAP: new FormControl({value: 'AM', disabled: false}, Validators.required),

    departureAirline: new FormControl({value: '', disabled: false}, Validators.required),
    departureFlightNo: new FormControl({value: '', disabled: false}, Validators.required),
    departureDate: new FormControl({value: '', disabled: false}, Validators.required),
    departureTimeHours: new FormControl({value: '', disabled: false}, Validators.required),
    departureTimeMinutes: new FormControl({value: '', disabled: false}, Validators.required),
    departureTimeAP: new FormControl({value: 'AM', disabled: false}, Validators.required),

    booster: new FormControl({value: false, disabled: false}, Validators.required),
    baby: new FormControl({value: false, disabled: false}, Validators.required),
    wheel: new FormControl({value: false, disabled: false}, Validators.required),
    grocery: new FormControl({value: false, disabled: false}, Validators.required),

    request: new FormControl({value: '', disabled: false}, Validators.required)
  });

  public contactInformationForm = this.fb.group({
    firstName: new FormControl({value: '', disabled: false}, Validators.required),
    lastName: new FormControl({value: '', disabled: false}, Validators.required),
    email: new FormControl({value: '', disabled: false}, Validators.required),
    confEmail: new FormControl({value: '', disabled: false}, Validators.required),
    phone: new FormControl({value: '', disabled: false}, Validators.required),
    confPhone: new FormControl({value: '', disabled: false}, Validators.required),
    //string
    
    streetName1: new FormControl({value: '', disabled: false}, Validators.required),
    streetName2: new FormControl({value: '', disabled: false}),
    exteriorNo: new FormControl({value: '', disabled: false}, Validators.required),
    interiorNo: new FormControl({value: '', disabled: false}, Validators.required),
    colony: new FormControl({value: '', disabled: false}),
    zipCode: new FormControl({value: '', disabled: false}),
    //string
    country: new FormControl({value: '', disabled: false}), //dropdown
  });

  bookNowObject : any = {
    origin: '',
    destination: '',
    adultsQty: 0,
    childsQty: 0,
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

  adultsQty = 0;
  childsQty = 0;

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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setListeners();
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

  removeClasses() {
    console.log('hola')
  }

  performRequest() {
    var TDForm = this.transferDetailsForm;

    this.transferDetailsForm.patchValue({
      adultsQty: this.adultsQty,
      childsQty: this.childsQty,
    });

    this.bookNowObject = {
      ...this.bookNowObject, 
      ...this.transferDetailsForm.value, 
      ...this.contactInformationForm.value,
      'arrivalTime': 
        String(TDForm.get('arrivalTimeHours').value).padStart(2, '0') + ':' +
        String(TDForm.get('arrivalTimeMinutes').value).padStart(2, '0') + ' ' +
        TDForm.get('arrivalTimeAP').value,
      'departureTime': 
        String(TDForm.get('departureTimeHours').value).padStart(2, '0') + ':' +
        String(TDForm.get('departureTimeMinutes').value).padStart(2, '0') + ' ' +
        TDForm.get('departureTimeAP').value,
      'oneWay': this.oneWayChecked,
      'booster': this.boosterChecked,
      'baby': this.babyChecked,
      'wheel': this.wheelChecked,
      'grocery': this.groceryChecked,
    };

    delete this.bookNowObject.arrivalTimeHours;
    delete this.bookNowObject.arrivalTimeMinutes;
    delete this.bookNowObject.arrivalTimeAP;
    delete this.bookNowObject.departureTimeHours;
    delete this.bookNowObject.departureTimeMinutes;
    delete this.bookNowObject.departureTimeAP;

    console.log(this.bookNowObject)

    // console.log(this.transferDetailsForm.value)
    // console.log(this.contactInformationForm.value)
    if (this.transferDetailsForm.valid && this.contactInformationForm.valid) {
      console.log("registered correctly")
    }
  }
}
