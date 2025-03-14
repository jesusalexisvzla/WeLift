import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.scss']
})
export class BookNowComponent implements OnInit {

  public transferDetailsForm = this.fb.group({
    origin: new FormControl({value: '', disabled: false}, Validators.required),
    destination: new FormControl({value: '', disabled: false}, Validators.required),
    //dropdown fields - interchangable
    adultsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    childrenQty: new FormControl({value: 0, disabled: false}, Validators.required),
    //number - minus and plus signs
    oneWay: new FormControl({value: false, disabled: false}, Validators.required),
    //boolean

    arrivalAirline: new FormControl({value: '', disabled: false}, Validators.required), //dropdown
    arrivalFlightNo: new FormControl({value: '', disabled: false}, Validators.required), //string
    arrivalDate: new FormControl({value: Date, disabled: false}, Validators.required), //date
    arrivalTime: new FormControl({value: "", disabled: false}, Validators.required), //number - number - dropdown

    departureAirline: new FormControl({value: '', disabled: false}, Validators.required), //dropdown
    departureFlightNo: new FormControl({value: '', disabled: false}, Validators.required), //string
    departureDate: new FormControl({value: Date, disabled: false}, Validators.required), //date
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

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  performRequest() {
    if (this.transferDetailsForm.valid) {

    }
  }
}
