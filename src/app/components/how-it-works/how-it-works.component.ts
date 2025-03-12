import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

  statusOne = false;
  statusTwo = false;
  statusThree = false;
  statusFour = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(variableName) {
    this[variableName] = !this[variableName]
    console.log(this.statusOne)
  }

}
