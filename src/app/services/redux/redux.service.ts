import { Injectable } from '@angular/core';

import { combineReducers } from 'redux';
import { NgRedux } from '@angular-redux/store'

@Injectable()
export class ReduxService {

  constructor(private ngRedux:NgRedux<any>) { }

  combineReducers(reducers) {
    combineReducers(reducers);
  }
  
  configureStore (reducer, state) {
    this.ngRedux.configureStore(reducer, state);
  }
  
  dispatch (action) {
    this.ngRedux.dispatch(action);
  }
}
