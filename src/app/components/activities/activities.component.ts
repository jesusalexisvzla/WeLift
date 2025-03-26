import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public contactInformationForm = this.fb.group({
    fullName: new FormControl({value: '', disabled: false}, Validators.required),
    email: new FormControl({value: '', disabled: false}, Validators.required),
    phone: new FormControl({value: '', disabled: false}, Validators.required),
    destination: new FormControl({value: '', disabled: false}, Validators.required),
    dultsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    childsQty: new FormControl({value: 0, disabled: false}, Validators.required),
    message: new FormControl({value: '', disabled: false}, Validators.required)
  });

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

  adultsQty = 0;
  childsQty = 0;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  performRequest(){

  }

}
