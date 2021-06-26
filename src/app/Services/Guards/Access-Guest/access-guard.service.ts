import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) {

    if (this.auth.isAuth) {
      if (this.auth.isAdmin) {
        return true;
      }
      else {
        this.router.navigateByUrl("/access-denied");
        return false;
      }
    }
    else {
      this.router.navigateByUrl("/connexion");
        return false;
    }


  }

  constructor(private auth: AuthService, private router: Router) { }
}
