import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { NgReduxModule } from '@angular-redux/store';

import { LogInComponent } from './log-in.component';
import { firebaseOptions } from '../../../../../firebase-options';
import { AuthService } from '../../../../services/auth/auth.service';
import { ReduxService } from '../../../../services/redux/redux.service';
import { LOG_IN_SUCCESS, LOG_IN_ERROR } from '../../actions';

class RouterStub {
  navigate() {}
}

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, AngularFireModule.initializeApp(firebaseOptions), AngularFireAuthModule, NgReduxModule ],
      declarations: [ LogInComponent ],
      providers: [ { provide: Router, useClass: RouterStub}, AuthService, ReduxService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should have an input for email', () => {
    const debugElement = fixture.debugElement.query(By.css('input[type="email"]'))

    expect(debugElement).toBeTruthy();
  })

  it ('should have an input for password', () => {
    const debugElement = fixture.debugElement.query(By.css('input[type="password"]'))

    expect(debugElement).toBeTruthy();
  })

  it ('should have a submit button', () => {
    const debugElement = fixture.debugElement.query(By.css('button[type="submit"]'))

    expect(debugElement).toBeTruthy();
  })

  describe ('login', () => {
    describe('success', () => {
     it('should navigate to home after successful login', () => {
      const router = TestBed.get(Router)
      const spy = spyOn(router,'navigate');
        
        sendText('#email', 'bulcsu.farasi@gmail.com')
        .then(() => {
          return sendText('#password', 'abc123')
        })
        .then(() => {
          fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', new NgForm([],[]))
          fixture.detectChanges();
          expect(spy).toHaveBeenCalledWith(['/']);
        }) 
      })
      it('should dispatch log in success action', () => {
          const reduxService = TestBed.get(ReduxService);
          const authService = TestBed.get(AuthService);
          const spy = spyOn(reduxService,'dispatch');
          const returnValue = { user: {} }
          spyOn(authService, 'logIn').and.returnValue(Promise.resolve(returnValue));
          
          sendText('#email', 'bulcsu.farasi@gmail.com')
          .then(() => {
            return sendText('#password', 'abc123')
          })
          .then(() => {
            fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', new NgForm([],[]))
            fixture.detectChanges();
            expect(spy).toHaveBeenCalledWith({ type: LOG_IN_SUCCESS, user: returnValue.user });
          }) 
        })
    })
    describe('fail', () => {
       it('should dispatch log in error action', () => {
           const reduxService = TestBed.get(ReduxService);
           const authService = TestBed.get(AuthService);
           const spy = spyOn(reduxService,'dispatch');
           const returnValue = { code: '' }
           spyOn(authService, 'logIn').and.returnValue(Promise.resolve(returnValue));
           
           sendText('#email', 'bulcsu.farasi@gmail.com')
           .then(() => {
             return sendText('#password', 'abc12')
           })
           .then(() => {
             fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', new NgForm([],[]))
             fixture.detectChanges();
             expect(spy).toHaveBeenCalledWith({ type: LOG_IN_ERROR });
           }) 
         })
     })
  })

  function sendText(selector:string, text:string) {
    const input:HTMLInputElement = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = text;
    input.dispatchEvent(new Event('input'));
    return fixture.whenStable();
  }

});


