import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {

    if (this.auth.isAuth) {
      return true;
    } else {
      this.router.navigate( [ "connexion" ] );
      return false;
    }

  }

  constructor(private auth: AuthService, private router: Router) { }
}
