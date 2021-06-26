import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        this.router.navigate([''])
      }, 1000);
    });
  }

}
