import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  public isBigSize = window.innerWidth > 800;

  // public isMenuCollapsed = false

  constructor() { }

  ngOnInit(): void {
  }

  changeContent(state) {
    // console.log(this.isMenuCollapsed)
    // this.isMenuCollapsed = !state
    document.getElementById('content').style.width = state ? (this.isBigSize ? '84vw' : '80vw') : (this.isBigSize ? '94vw' : '90vw');
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

}
