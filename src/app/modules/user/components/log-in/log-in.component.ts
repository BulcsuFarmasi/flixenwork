import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../../services/auth/auth.service';
import { ReduxService } from '../../../../services/redux/redux.service';
import { LOG_IN_ERROR, LOG_IN_SUCCESS } from '../../actions';
import { Router } from '@angular/router';
import { select } from '@angular-redux/store';
import { AppState } from '../../../../store';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  @select((state:AppState) => state.userState.badCreditentals) badCreditentals;
  
  constructor(private authService:AuthService, private reduxService:ReduxService, private router:Router) { }

  ngOnInit() {
  }

  logIn (form) {
     this.authService.logIn(form.value).then((value:any) => {
       if(value.code) {
          this.reduxService.dispatch({ type: LOG_IN_ERROR })
       } else {
          this.reduxService.dispatch({ type: LOG_IN_SUCCESS, user: value.user })
          this.router.navigate(['/']);
       }
     });
  }

}
