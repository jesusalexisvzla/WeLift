import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarStatus = false;
  private sub!: Subscription;

  public sidebarMenu = [
    {
      name: 'Home',
      icon: 'accessibility',
      url: 'home',
      dropdownArray: []
    },
    {
      name: 'How it Works',
      icon: 'accessible',
      url: 'how-it-works',
      dropdownArray: []
    },
    {
      name: 'Groups',
      icon: 'accessibility',
      url: 'groups',
      dropdownArray: []
    },
    {
      name: 'Activities',
      icon: 'accessibility',
      url: 'activities',
      dropdownArray: []
    },
    {
      name: 'Blogs',
      icon: 'accessibility',
      url: 'blogs',
      dropdownArray: []
    },
    {
      name: 'Contact',
      icon: 'accessibility',
      url: 'contact',
      dropdownArray: []
    },
    {
      name: 'Book Now',
      icon: 'accessibility',
      url: 'book-now',
      dropdownArray: []
    },
  ]

  selected: string = this.router.url;
  
  constructor(
    public router: Router,
    private dataService: DataService,
  ) { 
    this.sub = this.dataService.sidebarStatus$.subscribe(
      status => this.sidebarStatus = status
    );
  }

  ngOnInit(): void {
  }
}
