import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth: boolean = true;
  isAdmin: boolean = true;

  constructor() { }




  logout(){
    this.isAdmin = false;
  }

}
