import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  collapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  navToggle() {
    let elem = document.getElementById('collapseTarget');

    if (this.collapsed) {
      elem?.classList.remove('collapse');
      elem?.classList.add('expand');
      this.collapsed = false
    } else {
      elem?.classList.remove('expand');
      elem?.classList.add('collapse');
      this.collapsed = true
    }
  }
}