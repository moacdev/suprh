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


  isMobile: boolean = false;



  constructor(private auth: AuthService, private router: Router, public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
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
