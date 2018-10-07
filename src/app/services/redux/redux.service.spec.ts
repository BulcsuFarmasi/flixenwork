import { TestBed, inject } from '@angular/core/testing';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { combineReducers } from 'redux'

import { ReduxService } from './redux.service';

describe('ReduxService', () => {
  let ngRedux:NgRedux<any>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgReduxModule],
      providers: [ReduxService]
    });
    ngRedux = TestBed.get(NgRedux);
  });

  it('should be created', inject([ReduxService], (service: ReduxService) => {
    expect(service).toBeTruthy();
  }));
  
  it('should call dispatch method of ngRedux', inject([ReduxService], (service: ReduxService) => {
    let action = { type: 'ADD_SOMETHING' };
    let spy = spyOn(ngRedux, 'dispatch').and.callFake(() => {});

    service.dispatch(action);

    expect(spy).toHaveBeenCalledWith(action);
  }));

  it('should call configureStore method of ngRedux', inject([ReduxService], (service: ReduxService) => {
    let state = {};
    let reducer = () => {};
    let spy = spyOn(ngRedux,'configureStore').and.callFake(() => {});

    service.configureStore(reducer, state);

    expect(spy).toHaveBeenCalledWith(reducer, state);
  }));
});
