import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AppUser } from './models/app-user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
  providedIn: 'root'
})
export class FireUserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }
  get(uid: string) {
    return this.db.object('/users/' + uid);
  }
}
