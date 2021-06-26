import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavItemService } from 'src/app/Services/Sidenav-item/sidenav-item.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})




export class SidenavComponent implements OnInit {


  @Input() isMobile: boolean = false;
  data: any;
  icons: any;

  constructor(private sidenav_item_service: SidenavItemService, private sanitizer: DomSanitizer) {
    this.data = this.sidenav_item_service.getData();
    this.icons = this.sidenav_item_service.getIcons();

   }

  ngOnInit(): void {

    
  }

}
