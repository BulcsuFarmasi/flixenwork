import { tassign } from 'tassign';

import { LOG_IN_ERROR, LOG_IN_SUCCESS } from './actions';
import { User } from '../../models/user';

export interface UserState {
    user:User
    badCreditentals:boolean;
}

export const INITIAL_USER_STATE:UserState = {
    user: {
        id: null,
        name: null,
        email: null,
        password: null
    },
    badCreditentals: false
}

export function logInError (state:UserState, action):UserState {
    return tassign(state, { badCreditentals: true })
}

export function logInSuccess (state:UserState, action):UserState {
    return tassign(state, { user: action.user })
}

export function userReducer (state:UserState = INITIAL_USER_STATE, action):UserState {
    return state
}