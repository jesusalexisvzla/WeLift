import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { MatLegacyTabGroup as MatTabGroup } from '@angular/material/legacy-tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  public transferDetailsForm = this.fb.group({
    airport: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    hotel: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    adultsQty: new UntypedFormControl({value: 0, disabled: false}, Validators.required),
    childsQty: new UntypedFormControl({value: 0, disabled: false}, Validators.required),
    oneWay: new UntypedFormControl({value: false, disabled: false}, Validators.required)
  });

  public contactInformationForm = this.fb.group({
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

  selectedAirport = ''
  selectedHotel = ''

  adultsQty = 0;
  childsQty = 0;

  oneWayChecked = false;

  constructor(
    private fb: UntypedFormBuilder,
    public router: Router,
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

  performRequest() {
  }

}
