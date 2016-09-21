import expect from 'expect';
import deepFreeze from 'deep-freeze';
import user from '../../reducers/user';
import * as types from '../../constants/ActionTypes';

describe(`user reducer`, () => {
    it(`should handle initial state`, () => {
        const initialState = {
            id: 0,
            email: ``,
            skills: [],
            url: ``
        };
        expect(initialState).toEqual(user());
    });

    it(`should handle ` + types.LOGIN, () => {
        const stateBefore = {
            id: 0,
            email: ``,
            skills: [],
            url: ``
        };
        const action = {
            type: types.LOGIN,
            payload: {
                id: `1234567`,
                email: `test@domain.com` 
            }
        };
        const stateAfter = {
            id: `1234567`,
            email: `test@domain.com`, 
            skills: [],
            url: ``
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = user(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it(`should handle ` + types.LOGOUT, () => {
        const stateBefore = {
            id: `1234567`,
            email: `test@domain.com`, 
            skills: [],
            url: ``
        };
        const action = {
            type: types.LOGOUT,
        };
        const stateAfter = {
            id: 0,
            email: ``,
            skills: [],
            url: ``
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = user(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    it(`should handle ` + types.REGISTER, () => {
        const stateBefore = [];
        const action = {
            type: types.REGISTER,
            payload: {
                id: `1234567`,
                email: `test@domain.com` 
            }
        };
        const stateAfter = {
            id: `1234567`,
            email: `test@domain.com`, 
            skills: [],
            url: ``
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        let state = user(stateBefore, action);

        expect(state).toEqual(stateAfter);  
    });

    
});

