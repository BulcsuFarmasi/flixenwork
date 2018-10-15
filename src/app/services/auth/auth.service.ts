import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {

  constructor(private angularFireAuth:AngularFireAuth) { }

  signIn (user) {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logIn (user) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
}
