import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth/auth.service';

@Component({
  selector: 'app-paie-app',
  templateUrl: './paie-app.component.html',
  styleUrls: ['./paie-app.component.css']
})
export class PaieAppComponent implements OnInit {

  opened: boolean = true
  subMenu1: boolean = false;
  subMenu2: boolean = false;
  subMenu3: boolean = false;
  subMenu4: boolean = false;

  isMobile: boolean = false;



  constructor(private auth: AuthService, private router: Router, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = true;
          this.opened = false;
        } else {
          this.isMobile = false;
          this.opened = true;
        }
      });
  }

  toggleSide(){
    this.opened = !this.opened
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['/'])
  }

}
