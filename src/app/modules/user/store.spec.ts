import { INITIAL_USER_STATE, logInError, UserState, logInSuccess } from "./store";
import { LOG_IN_ERROR, LOG_IN_SUCCESS } from "./actions";

describe('UserStore', () => {
    let userState:UserState;
    beforeEach(() => {
        userState = INITIAL_USER_STATE;
    })
    
    describe ('logInError', () => {
        it ('should set badCreditentals to true', () => {
            const action = { type: LOG_IN_ERROR }
            userState = logInError(userState, action);
            expect(userState.badCreditentals).toBeTruthy();
        })
    })

    describe ('logInSuccess', () => {
        it ('should set the user property with the given user object', () => {
            const user = { id: '1', name: 'a', email: 'a@a.hu', password: '' }
            const action = { type: LOG_IN_SUCCESS, user }
            userState = logInSuccess(userState, action);

            expect(userState.user).toBe(user);
        })
    })
})