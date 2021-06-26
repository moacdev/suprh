import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {

    if (this.auth.isAuth === false) {
      return true;
    } else {

      this.router.navigate( [ "" ] );

      return false;
    }

  }

  constructor(private auth: AuthService, private router: Router) { }
}
