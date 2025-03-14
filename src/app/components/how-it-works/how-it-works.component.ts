import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

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
  ]

  cardsSection2 = [
    {
      arrow: true,
      title: "Arrival & Immigration",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      arrow: true,
      title: "Luggage and Customs",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      arrow: false,
      title: "Timeshare & Other Rentals",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      arrow: true,
      title: "Go to Group Exit",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
    {
      arrow: false,
      title: "Greet us at Umbrella #5",
      text: "Straight after your arrival you will need to go to the immigration desks and present your documents."
    },
  ]

  cardsSection3 = [
    {
      open: false,
      title: "Will my driver try to baptize me and my family?",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      open: false,
      title: "Will my driver try to baptize me and my family?",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      open: false,
      title: "Will my driver try to baptize me and my family?",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
    {
      open: false,
      title: "Will my driver try to baptize me and my family?",
      text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Fusce elementum sed auctor curae sodales felis magna."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  open(variableName) {
    this[variableName] = !this[variableName]
  }

}
