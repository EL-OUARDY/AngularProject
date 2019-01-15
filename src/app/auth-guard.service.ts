import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { FireAuthService } from './fire-auth.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: FireAuthService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    // return this.auth.user$.pipe(map(user => {
    //   if (user) {
    //     return true;
    //   }
    //   this.router.navigate(['/sign-in'], { queryParams: { returnUrl: state.url } });
    //   return false;
    // }));

    return true;
  }

}
