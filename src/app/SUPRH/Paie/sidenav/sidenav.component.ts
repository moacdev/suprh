import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  subMenu1: boolean = false;
  subMenu2: boolean = false;
  subMenu3: boolean = false;
  subMenu4: boolean = false;
  subMenu_retenu: boolean = false;

  @Input() isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
