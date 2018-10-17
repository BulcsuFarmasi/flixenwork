import { Injectable } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { AppState } from '../../store';

@Injectable()
export class ReduxService {

  constructor(private ngRedux:NgRedux<AppState>) { }
  
  configureStore (reducer, state) {
    this.ngRedux.configureStore(reducer, state);
  }
  
  dispatch (action) {
    this.ngRedux.dispatch(action);
  }
}
