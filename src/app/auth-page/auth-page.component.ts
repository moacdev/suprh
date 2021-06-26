import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  showPassword: boolean = false;
  emailInput: string  = "";
  passwordInput: string = "";
  authLoading: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  submitAuthForm(){
    this.authLoading = true;
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        this.auth.fakeAuth()
        this.authLoading = false;
        this.router.navigate(['/admin'])
      }, 1000);
    });
  }

}
