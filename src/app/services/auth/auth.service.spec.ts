import { TestBed, inject } from '@angular/core/testing';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';

import { firebaseOptions } from '../../app.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(firebaseOptions),
        AngularFireAuthModule
      ],
      providers: [AuthService]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
  it('should call createUserWithEmailAndPasswordMethod when  register', inject([AuthService], (service: AuthService) => {
    let angularFireAuth = TestBed.get(AngularFireAuth);
    let spy = spyOn(angularFireAuth.auth, 'createUserWithEmailAndPassword').and.returnValue(Promise.resolve({}));
    let user = { email: 'name@domain.com', password: '12345' };

    service.signIn(user);

    expect(spy).toHaveBeenCalledWith(user.email, user.password);
  }));
  it('should call signInWithEmailAndPasswordMethod when log in', inject([AuthService], (service: AuthService) => {
    let angularFireAuth = TestBed.get(AngularFireAuth);
    let spy = spyOn(angularFireAuth.auth, 'signInWithEmailAndPassword').and.returnValue(Promise.resolve({}));
    let user = { email: 'name@domain.com', password: '12345' };

    service.logIn(user);

    expect(spy).toHaveBeenCalledWith(user.email, user.password);
  }));
});
