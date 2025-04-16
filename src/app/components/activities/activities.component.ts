import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from "@angular/forms";
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy, AfterViewInit {
  private onDestroy = new Subject<void>();
  public isBigSize = window.innerWidth > 800;

  public contactInformationForm = this.fb.group({
    fullName: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    email: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    phone: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    activity: new UntypedFormControl({value: '', disabled: false}, Validators.required),
    adultsNo: new UntypedFormControl({value: 0, disabled: false}),
    childsNo: new UntypedFormControl({value: 0, disabled: false}),
    message: new UntypedFormControl({value: '', disabled: false}, Validators.required)
  });

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

  adultsNo = 0;
  childsNo = 0;

  btnDisabled = false;

  constructor(
    private fb: UntypedFormBuilder,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    var element = document.getElementById("car" + (!this.isBigSize ? 1 : 4))
    var element2 = document.getElementById("car" + (!this.isBigSize ? 2 : 5))
    element.classList.add('blur-sm')
    element2.classList.add('blur-m')
  }

  changePicture(plus) {
    plus ? document.getElementById('contt').scrollLeft += (this.isBigSize ? 240 : 155) : document.getElementById('contt').scrollLeft -= (this.isBigSize ? 240 : 155);
    var skips = document.getElementById('contt').scrollLeft / (this.isBigSize ? 250 : 165);
    var element = document.getElementById("car" + ((!this.isBigSize ? 1 : 4) + Math.ceil(skips)))
    var element2 = document.getElementById("car" + ((!this.isBigSize ? 2 : 5) + Math.ceil(skips)))

    document.getElementsByClassName('blur-sm')[0]?.classList.remove('blur-sm')
    document.getElementsByClassName('blur-m')[0]?.classList.remove('blur-m')
    element.classList.add('blur-sm')
    element2.classList.add('blur-m')
  }

  performRequest(){
    this.btnDisabled = true;
    if (this.contactInformationForm.valid && (this.adultsNo + this.childsNo > 0)) {
      const infoObject = {
        fullName: this.contactInformationForm.get('fullName')?.value,
        email: this.contactInformationForm.get('email')?.value,
        phone: this.contactInformationForm.get('phone')?.value,
        message: this.contactInformationForm.get('message')?.value
      };  

      console.log('registered info', infoObject);
      this.showToast('Information correclty registered', 'green-snackbar')
      // this.emailService.sendEmail(infoObject.email, 'Information', infoObject.message)
      this.contactInformationForm.reset();
      this.btnDisabled = false;
    } else {
      this.btnDisabled = false;
      this.showToast('Information not filled in correclty', 'yellow-snackbar')
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
