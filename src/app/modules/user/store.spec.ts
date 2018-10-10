import { INITIAL_USER_STATE, logInError, UserState } from "./store";
import { LOG_IN_ERROR } from "./actions";

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
        
    })

    describe ('logInError', () => {
        
    })
})