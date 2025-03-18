import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MatTabGroup } from '@angular/material/tabs';

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
    //dropdown fields - interchangable
    adultsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    childsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    //number - minus and plus signs
    oneWay: new FormControl({value: false, disabled: false}, Validators.required),
    //boolean

    arrivalAirline: new FormControl({value: '', disabled: false}, Validators.required), //dropdown
    arrivalFlightNo: new FormControl({value: '', disabled: false}, Validators.required), //string
    arrivalDate: new FormControl({value: '', disabled: false}, Validators.required), //date
    arrivalTime: new FormControl({value: "", disabled: false}, Validators.required), //number - number - dropdown

    departureAirline: new FormControl({value: '', disabled: false}, Validators.required), //dropdown
    departureFlightNo: new FormControl({value: '', disabled: false}, Validators.required), //string
    departureDate: new FormControl({value: '', disabled: false}, Validators.required), //date
    departureTime: new FormControl({value: "", disabled: false}, Validators.required), //number - number - dropdown

    booster: new FormControl({value: false, disabled: false}, Validators.required),
    baby: new FormControl({value: false, disabled: false}, Validators.required),
    wheel: new FormControl({value: false, disabled: false}, Validators.required),
    grocery: new FormControl({value: false, disabled: false}, Validators.required),
    //boolean

    request: new FormControl({value: '', disabled: false}, Validators.required)
    //text area
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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.setListeners();
  }

  setListeners() {
    this.transferDetailsForm.get("origin").valueChanges.subscribe( origin => {
      if (origin == this.transferDetailsForm.get("destination").value) {
        this.transferDetailsForm.controls['origin'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['origin'].setErrors(null)
      }
    })

    this.transferDetailsForm.get("destination").valueChanges.subscribe( destination => {
      if (destination == this.transferDetailsForm.get("origin").value) {
        this.transferDetailsForm.controls['destination'].setErrors({'incorrect': true})
      } else {
        this.transferDetailsForm.controls['destination'].setErrors(null)
      }
    })

    this.contactInformationForm.get("confEmail").valueChanges.subscribe( email => {
      if (email != this.contactInformationForm.get("email").value) {
        this.contactInformationForm.controls['confEmail'].setErrors({'incorrect': true})
      } else {
        this.contactInformationForm.controls['confEmail'].setErrors(null)
      }
    })

    this.contactInformationForm.get("confPhone").valueChanges.subscribe( phone => {
      if (phone != this.contactInformationForm.get("phone").value) {
        this.contactInformationForm.controls['confPhone'].setErrors({'incorrect': true})
      } else {
        this.contactInformationForm.controls['confPhone'].setErrors(null)
      }
    })
  }

  performRequest() {
    this.transferDetailsForm.patchValue({
      adultsQty: this.adultsQty,
      childsQty: this.childsQty
    });

    console.log(this.transferDetailsForm.value)
    console.log(this.transferDetailsForm.value)
    if (this.transferDetailsForm.valid && this.contactInformationForm.valid) {
      console.log("registered correctly")
    }
  }
}
