import { Component, Input, OnInit, SecurityContext } from '@angular/core';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.css']
})
export class SidenavItemComponent implements OnInit {

  subMenu: boolean = false

  @Input() isMobile: boolean = false

  @Input() _data: any;
  @Input() icons: any;

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
