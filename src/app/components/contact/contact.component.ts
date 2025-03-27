import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactInformationForm = this.fb.group({
    fullName: new FormControl({value: '', disabled: false}, Validators.required),
    email: new FormControl({value: '', disabled: false}, Validators.required),
    phone: new FormControl({value: '', disabled: false}, Validators.required),
    message: new FormControl({value: '', disabled: false}, Validators.required)
  });

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  performRequest(){

  }

}
