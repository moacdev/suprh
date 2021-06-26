import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = false;
  isAdmin: boolean = false;



  constructor() { }




  logout(){
    this.isAdmin = false;
  }

  fakeAuth(){
    this.isAuth = true;
  }

}
