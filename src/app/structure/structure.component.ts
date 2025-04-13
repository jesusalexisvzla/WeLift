import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {
  public isBigSize = window.innerWidth > 800;

  public isMenuCollapsed = false

  sidebarStatus = false;
  private sub!: Subscription;

  constructor(
    private dataService: DataService,
  ) {
    this.sub = this.dataService.sidebarStatus$.subscribe(status => {
      this.sidebarStatus = status;
      setTimeout(() => {
        const sidebar = document.getElementById('sidebar-container');
          if (sidebar) {
            sidebar.style.width = status
              ? (this.isBigSize ? '0vw' : '0vw')
              : (this.isBigSize ? '0vw' : '25vw');
          }
        const content = document.getElementById('content');
          if (content) {
            content.style.width = status
              ? (this.isBigSize ? '100vw' : '100vw')
              : (this.isBigSize ? '0vw' : '75vw');
          }
      }, 0);
    });
  }

  ngOnInit(): void {
  }

  changeContent(state) {
    console.log(state)
    // this.isMenuCollapsed = !state
    // document.getElementById('content').style.width = state ? (this.isBigSize ? '84vw' : '80vw') : (this.isBigSize ? '94vw' : '90vw');
    // document.getElementById('sidebar').style.width = state ? '16vw' : '6vw';
  }

  receiveMessage($event) {
    // console.log(this.isMenuCollapsed)
    // if (document.getElementById('content').style.width == '84vw') {
    //   document.getElementById('content').style.width = '94vw';
    //   document.getElementById('sidebar').style.width = '6vw';
    // } else {
    //   document.getElementById('content').style.width = '84vw';
    //   document.getElementById('sidebar').style.width = '16vw';
    // }
    // this.isMenuCollapsed = !this.isMenuCollapsed
  }

  cls() {
    if (!this.sidebarStatus) this.dataService.openCloseSB();
  }

}
