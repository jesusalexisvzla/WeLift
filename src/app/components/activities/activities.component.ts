import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, AfterViewInit {

  public contactInformationForm = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    destination: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    dultsQty: new UntypedFormControl({value: 0, disabled: false}, Validators.required),
    childsQty: new UntypedFormControl({value: 0, disabled: false}, Validators.required),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
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
  
  activities = [
    {
      name: "Golf",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "ATV´s Tours",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Todos Santos Tour",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Sunset Cruise",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Toyota Hiace",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Toyota Hiace",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Toyota Hiace",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      name: "Toyota Hiace",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."

    },
    {
      name: "Toyota Hiace",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    }
  ]

  adultsQty = 0;
  childsQty = 0;

  constructor(
    private fb: UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    var element = document.getElementById("car" + 4)
    var element2 = document.getElementById("car" + 5)
    element.classList.add('blur-sm')
    element2.classList.add('blur-m')
  }

  changePicture(plus) {
    plus ? document.getElementById('contt').scrollLeft += 310 : document.getElementById('contt').scrollLeft -= 310;
    var skips = document.getElementById('contt').scrollLeft / 310;
    var element = document.getElementById("car" + (4 + Math.ceil(skips)))
    var element2 = document.getElementById("car" + (5 + Math.ceil(skips)))

    document.getElementsByClassName('blur-sm')[0]?.classList.remove('blur-sm')
    document.getElementsByClassName('blur-m')[0]?.classList.remove('blur-m')
    element.classList.add('blur-sm')
    element2.classList.add('blur-m')
  }

  performRequest(){
  }

}
