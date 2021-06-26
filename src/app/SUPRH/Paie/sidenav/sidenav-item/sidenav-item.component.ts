import { Component, Input, OnInit, SecurityContext } from '@angular/core';
import { SidenavItemService } from 'src/app/Services/Sidenav-item/sidenav-item.service';
import { DomSanitizer} from '@angular/platform-browser';

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

  constructor(private domSanitizer: DomSanitizer) {
    
   }

  ngOnInit(): void {
    this._data.icon = this.domSanitizer.bypassSecurityTrustHtml(this._data.icon);
  }

}
