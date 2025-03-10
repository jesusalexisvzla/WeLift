import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public sidebarMenu = [
    {
      name: 'content1',
      icon: 'accessibility',
      url: 'content1',
      dropdownArray: [
        {
          name: 'content1',
          icon: 'accessibility',
          url: 'content1',
        },
        {
          name: 'content2',
          icon: 'accessible',
          url: 'content2',
        },
      ]
    },
    {
      name: 'content2',
      icon: 'accessible',
      url: 'content2',
      dropdownArray: []
    }
  ]

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }
}
