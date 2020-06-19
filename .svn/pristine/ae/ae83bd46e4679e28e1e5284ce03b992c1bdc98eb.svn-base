import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot,Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private AuthenticationService: AuthenticationService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      return this.checkLogin(url);
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      return this.canActivate(route, state);
  }
  
  checkLogin(url: string) {
    if (this.AuthenticationService.isLoggedIn()) {
        return true;
    }
 
    this.AuthenticationService.redirectUrl = url;

    this.router.navigate(['/login'], {queryParams: { returnUrl: url }} );
  }
}
