import { Component } from '@angular/core';
import { FireAuthService } from './fire-auth.service';
import { Router } from '@angular/router';
import { FireUserService } from './fire-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: FireUserService, private auth: FireAuthService, router: Router) {
    auth.user$.subscribe(user => {
      if (user) {
        userService.save(user);

        const returnUrl = localStorage.getItem('returnUrl');
        localStorage.removeItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
