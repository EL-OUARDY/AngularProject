import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class FireAuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: ActivatedRoute) {
    this.user$ = afAuth.authState;
  }

  Login() {
    const returnUrl = this.router.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  Logout() {
    this.afAuth.auth.signOut();
  }
}
