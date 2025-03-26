import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  public contactInformationForm = this.fb.group({
      fullName: new FormControl({value: '', disabled: false}, Validators.required),
      email: new FormControl({value: '', disabled: false}, Validators.required),
      phone: new FormControl({value: '', disabled: false}, Validators.required),
      message: new FormControl({value: '', disabled: false}, Validators.required)
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
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  performRequest() {

  }

}
